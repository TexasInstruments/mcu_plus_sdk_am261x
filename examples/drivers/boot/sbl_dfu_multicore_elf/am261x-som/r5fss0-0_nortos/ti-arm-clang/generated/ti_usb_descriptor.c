/*
 *  Copyright (C) 2025 Texas Instruments Incorporated
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
/*
 * Auto generated file
 */
 


#include "tusb.h"

#define USB_BCD   (0x0200)  // USB version in BCD format (USB 2.0)

#define DEV_MANUFACTURER   "Texas Instruments, Inc."
#define DEV_SERIAL          "01.00.00.01"
#define DEV_PRODUCT         "AM261x DFU"
#define DEV_ALT_INTERFACE_0 "FLASH"

enum
{
  STRID_LANGID = 0,
  STRID_MANUFACTURER,
  STRID_PRODUCT,
  STRID_SERIAL,
  STRID_ALT_INTERFACE_0,
};


//--------------------------------------------------------------------+
// Device Descriptors
//--------------------------------------------------------------------+
static tusb_desc_device_t const desc_device =
{
    .bLength            = sizeof(tusb_desc_device_t),
    .bDescriptorType    = TUSB_DESC_DEVICE,
    .bcdUSB             = USB_BCD,

    .bDeviceClass       = 0x00,
    .bDeviceSubClass    = 0x00,
    .bDeviceProtocol    = 0x00,

    .bMaxPacketSize0    = CFG_TUD_ENDPOINT0_SIZE,

    .idVendor           = 0x0451,
    .idProduct          = 0x6164,
    .bcdDevice          = 0x0100,

    .iManufacturer      = STRID_MANUFACTURER,
    .iProduct           = STRID_PRODUCT,
    .iSerialNumber      = STRID_SERIAL,

    .bNumConfigurations = 1
};

// Invoked when received GET DEVICE DESCRIPTOR
// Application return pointer to descriptor
__attribute__((weak)) uint8_t const * tud_descriptor_device_cb(void)
{
  return (uint8_t const *) &desc_device;
}

//--------------------------------------------------------------------+
// Configuration Descriptor
//--------------------------------------------------------------------+
// Number of Alternate Interface (each for 1 flash partition)
#define ALT_COUNT   1

#define CONFIG_TOTAL_LEN    (TUD_CONFIG_DESC_LEN + TUD_DFU_DESC_LEN(ALT_COUNT))

#define FUNC_ATTRS (DFU_ATTR_CAN_UPLOAD | DFU_ATTR_CAN_DOWNLOAD | DFU_ATTR_MANIFESTATION_TOLERANT)

#define BM_ATTRIBUTES       (0x80)  // Bus-powered

static uint8_t const desc_configuration[] =
{
  // Config number, interface count, string index, total length, attribute, power in mA
  TUD_CONFIG_DESCRIPTOR(1, 1, 0, CONFIG_TOTAL_LEN, BM_ATTRIBUTES, 100),

  // Interface number, Alternate count, starting string index, attributes, detach timeout, transfer size
  TUD_DFU_DESCRIPTOR(0, ALT_COUNT, 4, FUNC_ATTRS, 1000, CFG_TUD_DFU_XFER_BUFSIZE),
};

// Invoked when received GET CONFIGURATION DESCRIPTOR
// Application return pointer to descriptor
// Descriptor contents must exist long enough for transfer to complete
__attribute__((weak)) uint8_t const * tud_descriptor_configuration_cb(uint8_t index)
{
    (void) index; // for multiple configurations
    return desc_configuration;
}


//--------------------------------------------------------------------+
// Device Qualifier Descriptor
//--------------------------------------------------------------------+
static tusb_desc_device_qualifier_t const desc_device_qualifier =
{
    .bLength            = sizeof(tusb_desc_device_t),
    .bDescriptorType    = TUSB_DESC_DEVICE,
    .bcdUSB             = USB_BCD,

    .bDeviceClass       = 0x00,
    .bDeviceSubClass    = 0x00,
    .bDeviceProtocol    = 0x00,

    .bMaxPacketSize0    = CFG_TUD_ENDPOINT0_SIZE,
    .bNumConfigurations = 1,
    .bReserved          = 0x00
};

/* Invoked when received GET DEVICE QUALIFIER DESCRIPTOR request */
/* Application return pointer to descriptor, whose contents must exist long enough for transfer to complete. */
/* device_qualifier descriptor describes information about a high-speed capable device that would */
/* change if the device were operating at the other speed. If not highspeed capable stall this request. */
__attribute__((weak)) uint8_t const* tud_descriptor_device_qualifier_cb(void)
{
  return (uint8_t const*) &desc_device_qualifier;
}

//--------------------------------------------------------------------+
// String Descriptors
//--------------------------------------------------------------------+
static char const* string_desc_arr [] =
{
    [STRID_LANGID]          = (const char[]) { 0x09, 0x04 },
    [STRID_MANUFACTURER]    = DEV_MANUFACTURER,
    [STRID_PRODUCT]         = DEV_PRODUCT,
    [STRID_SERIAL]          = DEV_SERIAL,             
    [STRID_ALT_INTERFACE_0]= DEV_ALT_INTERFACE_0,
};

static uint16_t _desc_str[32];

// Invoked when received GET STRING DESCRIPTOR request
// Application return pointer to descriptor, whose contents must exist long enough for transfer to complete
__attribute__((weak)) uint16_t const* tud_descriptor_string_cb(uint8_t index, uint16_t langid)
{
  (void) langid;

  unsigned int chr_count = 0;

  if (STRID_LANGID == index)
  {
    memcpy(&_desc_str[1], string_desc_arr[STRID_LANGID], 2);
    chr_count = 1;
  }
  else
  {
    // Note: the 0xEE index string is a Microsoft OS 1.0 Descriptors.
    // https://docs.microsoft.com/en-us/windows-hardware/drivers/usbcon/microsoft-defined-usb-descriptors

    if ( index >= sizeof(string_desc_arr)/sizeof(string_desc_arr[0]) ) return NULL;

    const char* str = string_desc_arr[index];

    // Cap at max char
    chr_count = (uint8_t) strlen(str);
    if ( chr_count > (TU_ARRAY_SIZE(_desc_str) - 1)) chr_count = TU_ARRAY_SIZE(_desc_str) - 1;

    // Convert ASCII string into UTF-16
    for (unsigned int i=0; i<chr_count; i++)
    {
      _desc_str[1+i] = str[i];
    }
  }

  // first byte is length (including header), second byte is string type
  _desc_str[0] = (uint16_t) ((TUSB_DESC_STRING << 8 ) | (2*chr_count + 2));

  return _desc_str;
}

