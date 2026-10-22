/*
 *  Copyright (C) 2021-2023 Texas Instruments Incorporated
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions
 *  are met:
 *
 *    Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 *    Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the
 *    distribution.
 *
 *    Neither the name of Texas Instruments Incorporated nor the names of
 *    its contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
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

#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include <usb/synp/soc/usb_init.h>
#include "tusb.h"

#include "FreeRTOS.h"
#include <kernel/dpl/TaskP.h>

#include "ti_drivers_config.h"
#include "ti_drivers_open_close.h"
#include "ti_board_open_close.h"

#define USB_TASK_PRI  (TaskP_PRIORITY_HIGHEST-2)
#define USB_TASK_SIZE (1024U)
uint8_t gUsbTaskStack[USB_TASK_SIZE] __attribute__((aligned(32)));
TaskP_Object gUsbTaskObj;
TaskP_Params gUsbTaskParams;

void usb_task_loop(void *args);

int vendor_echo_main(void)
{
    int32_t status;

    Drivers_open();
    Board_driversOpen();

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

    return 0;
}

/* 
 * Normal path: echo the buffer handed to tud_vendor_rx_cb() straight back.
 * If the TX FIFO has no room for it, leave the data in the RX FIFO (the host
 * is throttled once it is full) and move it from tud_vendor_tx_cb() when TX
 * has drained.
 */
/* Staging buffer for the fallback path only: tud_vendor_tx_cb() copies data
 * that was left in the RX FIFO into this buffer, then writes it to the TX FIFO. */
static uint8_t gRxStageBuf[CFG_TUD_VENDOR_RX_BUFSIZE] __attribute__((aligned(32)));

/* Invoked when data is received from the host */
void tud_vendor_rx_cb(uint8_t itf, uint8_t const *buffer, uint16_t bufsize)
{
    (void)itf;

    if (tud_vendor_write_available() >= bufsize)
    {
        tud_vendor_write(buffer, bufsize);
        tud_vendor_write_flush();
        tud_vendor_read_flush(); /* drop the RX FIFO copy and re-arm the OUT endpoint */
    }
}

/* Invoked when a transfer to the host completed: TX FIFO has room again */
void tud_vendor_tx_cb(uint8_t itf, uint32_t sent_bytes)
{
    (void)itf; (void)sent_bytes;

    uint32_t count = TU_MIN(tud_vendor_available(), tud_vendor_write_available());
    count = TU_MIN(count, sizeof(gRxStageBuf));

    if (count > 0)
    {
        count = tud_vendor_read(gRxStageBuf, count);
        tud_vendor_write(gRxStageBuf, count);
        tud_vendor_write_flush();
    }
}

void usb_task_loop(void *args)
{
    while (1)
    {
        USB_dwcTask(); /* Synopsis DWC task */

        tud_task_ext(0, false);    /* tinyusb device task */
    }
}
