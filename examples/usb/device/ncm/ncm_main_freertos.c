/*
 *  Copyright (C) 2021-2023 Texas Instruments Incorporated
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions
 *  are met:
 *
 *      Redistributions of source code must retain the above copyright
 *      notice, this list of conditions and the following disclaimer.
 *
 *      Redistributions in binary form must reproduce the above copyright
 *      notice, this list of conditions and the following disclaimer in the
 *      documentation and/or other materials provided with the
 *      distribution.
 *
 *      Neither the name of Texas Instruments Incorporated nor the names of
 *      its contributors may be used to endorse or promote products derived
 *      from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 *  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 *  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 *  A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 *  OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 *  SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 *  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 *  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 *  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 *  OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/* Adapted by TI for running on its platform and SDK */

#include <ctype.h>
#include <kernel/dpl/ClockP.h>
#include <kernel/dpl/DebugP.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "FreeRTOS.h"
#include <kernel/dpl/TaskP.h>
#include <kernel/dpl/QueueP.h>
#include <kernel/dpl/SemaphoreP.h>
#include <kernel/dpl/EventP.h>

#include "dhserver.h"
#include "dnserver.h"
#include "httpd.h"
#include "lwip/apps/lwiperf.h"
#include "lwip/ethip6.h"
#include "lwip/init.h"
#include "lwip/timeouts.h"
#include "ti_board_open_close.h"
#include "ti_drivers_config.h"
#include "ti_drivers_open_close.h"
#include "tusb.h"
#include <lwip/tcpip.h>


#define USB_TASK_PRI      (TaskP_PRIORITY_HIGHEST-2)
#define USB_TASK_SIZE       (2048U)
uint8_t gUsbTaskStack[USB_TASK_SIZE] __attribute__((aligned(32)));
TaskP_Object gUsbTaskObj;
TaskP_Params gUsbTaskParams;

#define NETWORK_SERVICE_TASK_PRI  (TaskP_PRIORITY_HIGHEST-4)
#define NETWORK_SERVICE_TASK_SIZE (2048U)
uint8_t gNetworkTaskStack[NETWORK_SERVICE_TASK_SIZE] __attribute__((aligned(32)));
TaskP_Object gNetworkTaskObj;
TaskP_Params gNetworkTaskParams;

/* Event bits for network processing */
#define NETWORK_EVENT_TX_BIT        (1 << 0)  /* Bit 0: TX data ready */
#define NETWORK_EVENT_TX_RETRY_BIT  (1 << 1)  /* Bit 1: TX retry */

EventP_Object gNetworkEventObj;

void usb_task_loop(void *args);
void network_service_task_loop(void *args);

#define TX_QUEUE_SIZE 64

typedef struct
{
    QueueP_Elem elem;
    struct pbuf * pbuf;
}ncmQueueElem;

QueueP_Object   freeQObjectTx;
QueueP_Object   readyQObjectTx;
QueueP_Handle   freeQHandleTx;
QueueP_Handle   readyQHandleTx;

SemaphoreP_Object txQueueMutex;
SemaphoreP_Object initNetwork;

static ncmQueueElem ncmTxQueueBuffer[TX_QUEUE_SIZE] = {0};
static ncmQueueElem *pendingElem = NULL;

#if LWIP_TCP
static void lwiperf_report(void *arg, enum lwiperf_report_type report_type,
                                                     const ip_addr_t *local_addr, u16_t local_port,
                                                     const ip_addr_t *remote_addr, u16_t remote_port,
                                                     u32_t bytes_transferred, u32_t ms_duration,
                                                     u32_t bandwidth_kbitpsec) {
    LWIP_UNUSED_ARG(arg);
    LWIP_UNUSED_ARG(local_addr);
    LWIP_UNUSED_ARG(local_port);

    DebugP_log("IPERF report: type=%d, remote: %s:%d, total bytes: %" U32_F
                         ", duration in ms: %" U32_F ", kbits/s: %" U32_F "\n",
                         (int)report_type, ipaddr_ntoa(remote_addr), (int)remote_port,
                         bytes_transferred, ms_duration, bandwidth_kbitpsec);
}
#endif /* LWIP_TCP */

void lwiperf_example_init(void) {
#if LWIP_TCP
    lwiperf_start_tcp_server_default(lwiperf_report, NULL);
#endif
}

#define INIT_IP4(a, b, c, d) \
    { PP_HTONL(LWIP_MAKEU32(a, b, c, d)) }

/* lwip context */
static struct netif netif_data;

/* this is used by this code, ./class/net/net_driver.c, and usb_descriptors.c */
/* ideally speaking, this should be generated from the hardware's unique ID (if
 * available) */
/* it is suggested that the first byte is 0x02 to indicate a link-local address
 */
#if defined(SOC_AM64X) || defined (SOC_AM243X)
const uint8_t tud_network_mac_address[6] = {0x02, 0x02, 0x84, 0x6A, 0x96, 0x00};
#endif

/* network parameters of this MCU */
static const ip4_addr_t ipaddr = INIT_IP4(192, 168, 7, 1);
static const ip4_addr_t netmask = INIT_IP4(255, 255, 255, 0);
static const ip4_addr_t gateway = INIT_IP4(0, 0, 0, 0);

/* database IP addresses that can be offered to the host; this must be in RAM to
 * store assigned MAC addresses */
static dhcp_entry_t entries[] = {
        /* mac ip address                                                    lease time */
        {{0}, INIT_IP4(192, 168, 7, 2), 24 * 60 * 60},
        {{0}, INIT_IP4(192, 168, 7, 3), 24 * 60 * 60},
        {{0}, INIT_IP4(192, 168, 7, 4), 24 * 60 * 60},
};

static const dhcp_config_t dhcp_config = {
        .router = INIT_IP4(0, 0, 0, 0),  /* router address (if any) */
        .port = 67,                                          /* listen port */
        .dns = INIT_IP4(192, 168, 7, 1), /* dns server (if any) */
        "usb",                                                   /* dns suffix */
        TU_ARRAY_SIZE(entries),                  /* num entry */
        entries                                                  /* entries */
};

/* this function will transmit buffer on link and is called by ethernet_output()
 * function */
static err_t linkoutput_fn(struct netif *netif, struct pbuf *p) {
    (void)netif;

    /* if TinyUSB isn't ready, we must signal back to lwip that there is nothing
     * we can do */
    if (!tud_ready()) return ERR_USE;

    SemaphoreP_pend(&txQueueMutex, SystemP_WAIT_FOREVER);
    ncmQueueElem *elem = (ncmQueueElem*)QueueP_get(freeQHandleTx);
    if (elem != NULL)
    {
        pbuf_ref(p);
        elem->pbuf = p;

        QueueP_put(readyQHandleTx, elem);
        SemaphoreP_post(&txQueueMutex);
        
        /* Set TX event bit to trigger network task processing */
        EventP_setBits(&gNetworkEventObj, NETWORK_EVENT_TX_BIT);
        
        return ERR_OK;
    }
    SemaphoreP_post(&txQueueMutex);

    return ERR_MEM;
}

static err_t ip4_output_fn(struct netif *netif, struct pbuf *p,
                                                     const ip4_addr_t *addr) {
    return etharp_output(netif, p, addr);
}

#if LWIP_IPV6
static err_t ip6_output_fn(struct netif *netif, struct pbuf *p,
                                                     const ip6_addr_t *addr) {
    return ethip6_output(netif, p, addr);
}
#endif

static err_t netif_init_cb(struct netif *netif) {
    LWIP_ASSERT("netif != NULL", (netif != NULL));
    netif->mtu = CFG_TUD_NET_MTU;
    netif->flags = NETIF_FLAG_BROADCAST | NETIF_FLAG_ETHARP | NETIF_FLAG_LINK_UP |
                                 NETIF_FLAG_UP;
    netif->state = NULL;
    netif->name[0] = 'E';
    netif->name[1] = 'X';
    netif->linkoutput = linkoutput_fn;
    netif->output = ip4_output_fn;
#if LWIP_IPV6
    netif->output_ip6 = ip6_output_fn;
#endif
    return ERR_OK;
}

/* handle any DNS requests from dns-server */
bool dns_query_proc(const char *name, ip4_addr_t *addr) {
    if (0 == strcmp(name, "tiny.usb")) {
        *addr = ipaddr;
        return true;
    }
    return false;
}

static void setup_netif_and_services(netif_input_fn input_fn)
{
    struct netif *netif = &netif_data;

    /* the lwip virtual MAC address must be different from the host's; to ensure
     * this, we toggle the LSbit */
    netif->hwaddr_len = sizeof(tud_network_mac_address);
    memcpy(netif->hwaddr, tud_network_mac_address,
                 sizeof(tud_network_mac_address));
    netif->hwaddr[5] ^= 0x01;

    netif = netif_add(netif, &ipaddr, &netmask, &gateway, NULL, netif_init_cb,
                    input_fn);
#if LWIP_IPV6
    netif_create_ip6_linklocal_address(netif, 1);
#endif
    netif_set_default(netif);

#if LWIP_LWIPERF_APP
    lwiperf_example_init();
#endif
    while (!netif_is_up(&netif_data))
        ClockP_usleep(1000);
    while (dhserv_init(&dhcp_config) != ERR_OK)
        ClockP_usleep(1000);
    while (dnserv_init(IP_ADDR_ANY, 53, dns_query_proc) != ERR_OK)
        ClockP_usleep(1000);
    httpd_init();
}

#if !NO_SYS
/* Called by the tcpip thread after lwip_init; runs in tcpip thread context. */
void lwIP_tcpipCallback(void *pvArg)
{
    setup_netif_and_services(tcpip_input);
    SemaphoreP_post(&initNetwork);
}
#endif

static void init_lwip(void) {
#if NO_SYS
    lwip_init();
    setup_netif_and_services(netif_input);
#else
    tcpip_init(lwIP_tcpipCallback, 0);
    SemaphoreP_pend(&initNetwork, SystemP_WAIT_FOREVER);
#endif
}

bool tud_network_recv_cb(const uint8_t *src, uint16_t size) {
    if (size == 0) {
        return true;
    }
    /* Guard against packets arriving before LwIP is initialized */
    if (netif_data.input == NULL) {
        return false;
    }
    struct pbuf *pbuf = pbuf_alloc(PBUF_RAW, size, PBUF_POOL);
    if (pbuf == NULL) {
        tud_network_recv_renew();
        return false;
    }
    pbuf_take(pbuf, src, size);
    if (ERR_OK != netif_data.input(pbuf, &netif_data)) {
        pbuf_free(pbuf);
    }
    tud_network_recv_renew();
    return true;
}

void QueueInit(){
    int32_t status;

    status = EventP_construct(&gNetworkEventObj);
    DebugP_assert(status == SystemP_SUCCESS);

    status = SemaphoreP_constructMutex(&txQueueMutex);
    DebugP_assert(status == SystemP_SUCCESS);

    status = SemaphoreP_constructBinary(&initNetwork, 0);
    DebugP_assert(status == SystemP_SUCCESS);

    freeQHandleTx = QueueP_create(&freeQObjectTx);
    readyQHandleTx = QueueP_create(&readyQObjectTx);

    for (uint8_t i = 0; i < TX_QUEUE_SIZE; i++) {
        QueueP_put(freeQHandleTx, &ncmTxQueueBuffer[i]);
    }
}

uint16_t tud_network_xmit_cb(uint8_t *dst, void *ref, uint16_t arg) {
    struct pbuf *p = (struct pbuf *)ref;

    (void)arg; /* unused for this example */

    return pbuf_copy_partial(p, dst, p->tot_len, 0);
}

/* here the ethernet input is the input to stack
 tcp/ip */
static void service_traffic(void) {

    ncmQueueElem *elem;
    uint32_t eventBits = 0;

    /* Wait for TX events - don't auto-clear, we'll clear manually */
    EventP_waitBits(&gNetworkEventObj,
        NETWORK_EVENT_TX_BIT | NETWORK_EVENT_TX_RETRY_BIT,
        0,  /* clearOnExit: don't auto-clear, we'll clear manually after processing */
        0,  /* waitForAll: wait for ANY bit (OR) */
        SystemP_WAIT_FOREVER,
        &eventBits);

    if (eventBits & (NETWORK_EVENT_TX_BIT | NETWORK_EVENT_TX_RETRY_BIT))
    {
        /* Clear the retry bit immediately if set */
        if (eventBits & NETWORK_EVENT_TX_RETRY_BIT) {
            EventP_clearBits(&gNetworkEventObj, NETWORK_EVENT_TX_RETRY_BIT);
        }
        
        /* Process TX queue with TX mutex - protect pendingElem access */
        if(SystemP_SUCCESS == SemaphoreP_pend(&txQueueMutex, SystemP_WAIT_FOREVER)){
            if (pendingElem != NULL)
            {
                if (tud_ready() && tud_network_can_xmit(pendingElem->pbuf->tot_len)) {
                    /* Transmit the packet */
                    tud_network_xmit(pendingElem->pbuf, 0);
                    pbuf_free(pendingElem->pbuf);
                    QueueP_put(freeQHandleTx, pendingElem);
                    pendingElem = NULL;
                } else {
                    /* Still can't transmit, set retry bit and return */
                    EventP_setBits(&gNetworkEventObj, NETWORK_EVENT_TX_RETRY_BIT);
                    SemaphoreP_post(&txQueueMutex);
                    return;
                }
            }
            
            while (QueueP_isEmpty(readyQHandleTx) == QueueP_NOTEMPTY) {
                elem = QueueP_get(readyQHandleTx);
                if (elem != NULL)
                {
                    if (tud_ready() && tud_network_can_xmit(elem->pbuf->tot_len)) {
                        /* Transmit the packet */
                        tud_network_xmit(elem->pbuf, 0);
                        pbuf_free(elem->pbuf);
                        QueueP_put(freeQHandleTx, elem);
                    }
                    else {
                        /* Can't transmit now, save for retry */
                        pendingElem = elem;
                        EventP_setBits(&gNetworkEventObj, NETWORK_EVENT_TX_RETRY_BIT);
                        SemaphoreP_post(&txQueueMutex);
                        return;
                    }
                }
            }
            
            /* All packets processed, clear TX bit */
            if (QueueP_isEmpty(readyQHandleTx) == QueueP_EMPTY && pendingElem == NULL)
            {
                EventP_clearBits(&gNetworkEventObj, NETWORK_EVENT_TX_BIT);
            }
            
            SemaphoreP_post(&txQueueMutex);
        }
    }
}

void tud_network_init_cb(void) {
    ncmQueueElem *elem;

    /* Flush TX queue on USB reconnect */
    SemaphoreP_pend(&txQueueMutex, SystemP_WAIT_FOREVER);
    
    /* Clean up pending element to prevent use-after-free */
    if (pendingElem != NULL) {
        pbuf_free(pendingElem->pbuf);
        QueueP_put(freeQHandleTx, pendingElem);
        pendingElem = NULL;
    }
    
    while (QueueP_isEmpty(readyQHandleTx) == QueueP_NOTEMPTY) {
        elem = QueueP_get(readyQHandleTx);
        if (elem != NULL) {
            pbuf_free(elem->pbuf);
            QueueP_put(freeQHandleTx, elem);
        }
    }
    SemaphoreP_post(&txQueueMutex);
}

/* lets receive POST request */

err_t httpd_post_begin(void *connection, const char *uri,
                                             const char *http_request, u16_t http_request_len,
                                             int content_len, char *response_uri,
                                             u16_t response_uri_len, u8_t *post_auto_wnd) {
    return ERR_OK;
}

err_t httpd_post_receive_data(void *connection, struct pbuf *p) {
    uint8_t motor_id = 0;
    char *angle;
    angle = (char *)p->payload;
    char angle_arr[4];

    if (angle[0] == '1')
        motor_id = 0;
    else
        motor_id = 1;

    for (uint8_t i = 1; i < 4; i++) {
        angle_arr[i - 1] = angle[i];
    }
    angle_arr[3] = '\0';
    int int_angle = atoi(angle_arr);

    DebugP_log("Value for motor id = %d and angle = %d \r\n", motor_id,
                         int_angle);

    return ERR_OK;
}

void httpd_post_finished(void *connection, char *response_uri,
                                                 u16_t response_uri_len) {
    snprintf(response_uri, response_uri_len, "/img/sics.gif");
    return;
}

void ncm_main(void *args) {
    (void)args;
    int32_t status;

    Drivers_open();
    Board_driversOpen();
    
    QueueInit();

    TaskP_Params_init(&gUsbTaskParams);
    gUsbTaskParams.name = "usb_task";                /**< Pointer to task name */
    gUsbTaskParams.stackSize = USB_TASK_SIZE;        /**< Size of stack in units of bytes */
    gUsbTaskParams.stack = gUsbTaskStack;            /**< Pointer to stack memory, MUST be aligned based on CPU architecture, typically atleast 32b on 32b systems */
    gUsbTaskParams.priority = USB_TASK_PRI;          /**< Task priority, MUST be between \ref TaskP_PRIORITY_LOWEST and TaskP_PRIORITY_HIGHEST */
    gUsbTaskParams.args = NULL;                      /**< User arguments that are passed back as parater to task main */
    gUsbTaskParams.taskMain = usb_task_loop;         /**< Entry point function to the task */
    /* create the task */
    status = TaskP_construct(&gUsbTaskObj, &gUsbTaskParams);
    DebugP_assert(status == SystemP_SUCCESS);

    TaskP_Params_init(&gNetworkTaskParams);
    gNetworkTaskParams.name = "network_task";                /**< Pointer to task name */
    gNetworkTaskParams.stackSize = NETWORK_SERVICE_TASK_SIZE;            /**< Size of stack in units of bytes */
    gNetworkTaskParams.stack = gNetworkTaskStack;                /**< Pointer to stack memory, MUST be aligned based on CPU architecture, typically atleast 32b on 32b systems */
    gNetworkTaskParams.priority = NETWORK_SERVICE_TASK_PRI;              /**< Task priority, MUST be between \ref TaskP_PRIORITY_LOWEST and TaskP_PRIORITY_HIGHEST */
    gNetworkTaskParams.args = NULL;                           /**< User arguments that are passed back as parater to task main */
    gNetworkTaskParams.taskMain = network_service_task_loop;  /**< Entry point function to the task */
    /* create the task */
    status = TaskP_construct(&gNetworkTaskObj, &gNetworkTaskParams);
    DebugP_assert(status == SystemP_SUCCESS);
}

void usb_task_loop(void *args)
{
    while (1)
    {
        USB_dwcTask(); /* Synopsis DWC task */

        tud_task_ext(0, false);
    }
}

void network_service_task_loop(void *args)
{
    (void)args;

    init_lwip();

    while (1)
    {
        service_traffic();
    }
}