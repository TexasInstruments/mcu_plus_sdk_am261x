/*
 *  Copyright (C) 2021-2024 Texas Instruments Incorporated
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
#include "ti_drivers_config.h"
#include <drivers/pinmux.h>

static Pinmux_PerCfg_t gPinMuxMainDomainCfg[] = {
            /* OSPI0 pin config */
    /* OSPI0_CLK -> GPIO2 (N2) */
    {
        PIN_GPIO2,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_CSn0 -> GPIO0 (P1) */
    {
        PIN_GPIO0,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D0 -> GPIO3 (N1) */
    {
        PIN_GPIO3,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D1 -> GPIO4 (N4) */
    {
        PIN_GPIO4,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D2 -> GPIO5 (M4) */
    {
        PIN_GPIO5,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D3 -> GPIO6 (P3) */
    {
        PIN_GPIO6,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D4 -> GPIO7 (M1) */
    {
        PIN_GPIO7,
        ( PIN_MODE(1) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D5 -> GPIO8 (L1) */
    {
        PIN_GPIO8,
        ( PIN_MODE(1) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D6 -> GPIO9 (L2) */
    {
        PIN_GPIO9,
        ( PIN_MODE(1) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D7 -> GPIO10 (K1) */
    {
        PIN_GPIO10,
        ( PIN_MODE(1) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_DQS -> GPIO76 (M3) */
    {
        PIN_GPIO76,
        ( PIN_MODE(1) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_RESET_OUT0 -> GPIO66 (J1) */
    {
        PIN_GPIO66,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },

            /* UART0 pin config */
    /* UART0_RXD -> GPIO27 (A7) */
    {
        PIN_GPIO27,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* UART0 pin config */
    /* UART0_TXD -> GPIO28 (A6) */
    {
        PIN_GPIO28,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },

    {PINMUX_END, PINMUX_END}
};


/*
 * Pinmux
 */


void Pinmux_init(void)
{



    Pinmux_config(gPinMuxMainDomainCfg, PINMUX_DOMAIN_ID_MAIN);
    
}


