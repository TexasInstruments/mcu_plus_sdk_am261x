  /*
   * The MIT License (MIT)
   *
   * Copyright (c) 2019 Ha Thach (tinyusb.org)
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *
   */
  /*
   *  Copyright (C) 2021 Texas Instruments Incorporated
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

  #include "tusb.h"
  #include "ti_drivers_open_close.h"

  /*
  --------------------------------------------------------------------+
   Configuration Descriptor
  --------------------------------------------------------------------+
  */
  enum
  {
    ITF_NUM_VENDOR = 0,
    ITF_NUM_TOTAL
  };

  #define CONFIG_TOTAL_LEN (TUD_CONFIG_DESC_LEN + TUD_VENDOR_DESC_LEN)

  #define EPNUM_VENDOR_OUT  0x01 
  #define EPNUM_VENDOR_IN   0x81  

  /* Full-speed configuration descriptor */
  uint8_t const desc_fs_configuration[] =
  {
      /* Config number, interface count, string index, total length, attribute, power in mA */
      TUD_CONFIG_DESCRIPTOR(1, ITF_NUM_TOTAL, 0, CONFIG_TOTAL_LEN, TUSB_DESC_CONFIG_ATT_REMOTE_WAKEUP, 100),

      /* Vendor interface with bulk endpoints */
      /* Interface number, string index, EP Out & IN address, EP size */
      TUD_VENDOR_DESCRIPTOR(ITF_NUM_VENDOR, 4, EPNUM_VENDOR_OUT, EPNUM_VENDOR_IN, 64)
  };

  #if TUD_OPT_HIGH_SPEED
  /* High-speed configuration descriptor */
  uint8_t const desc_hs_configuration[] =
  {
      /* Config number, interface count, string index, total length, attribute, power in mA */
      TUD_CONFIG_DESCRIPTOR(1, ITF_NUM_TOTAL, 0, CONFIG_TOTAL_LEN, TUSB_DESC_CONFIG_ATT_REMOTE_WAKEUP, 100),

      /* Vendor interface with bulk endpoints - high-speed uses 512 byte packets */
      /* Interface number, string index, EP Out & IN address, EP size */
      TUD_VENDOR_DESCRIPTOR(ITF_NUM_VENDOR, 4, EPNUM_VENDOR_OUT, EPNUM_VENDOR_IN, 512)
  };
  #endif

  /* Invoked when received GET OTHER SPEED CONFIGURATION DESCRIPTOR request */
  /* Application return pointer to descriptor, whose contents must exist long enough for transfer to complete */
  /* Configuration descriptor in the other speed e.g if high speed then this is for full speed and vice versa */
  uint8_t const *tud_descriptor_other_speed_configuration_cb(uint8_t index)
  {
    (void)index; /* for multiple configurations */

    #if TUD_OPT_HIGH_SPEED
      /* if link speed is high return fullspeed config, and vice versa */
      return (tud_speed_get() == TUSB_SPEED_HIGH) ? desc_fs_configuration : desc_hs_configuration;
    #else
      return desc_fs_configuration;
    #endif
  }

  /* Invoked when received GET CONFIGURATION DESCRIPTOR */
  /* Application return pointer to descriptor */
  /* Descriptor contents must exist long enough for transfer to complete */
  uint8_t const* tud_descriptor_configuration_cb(uint8_t index)
  {
      (void)index; /* for multiple configurations */
      #if TUD_OPT_HIGH_SPEED
          /* Although we are highspeed, host may be fullspeed. */
          return (tud_speed_get() == TUSB_SPEED_HIGH) ? desc_hs_configuration : desc_fs_configuration;
      #else
          return desc_fs_configuration;
      #endif
  }
