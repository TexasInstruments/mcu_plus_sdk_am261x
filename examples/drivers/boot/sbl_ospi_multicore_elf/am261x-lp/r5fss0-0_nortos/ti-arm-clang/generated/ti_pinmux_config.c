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
    /* OSPI0_CLK -> GPIO10 (N1) */
    {
        PIN_GPIO10,
        ( PIN_MODE(2) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_CSn0 -> GPIO62 (L2) */
    {
        PIN_GPIO62,
        ( PIN_MODE(2) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D0 -> GPIO2 (M3) */
    {
        PIN_GPIO2,
        ( PIN_MODE(1) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D1 -> GPIO70 (M2) */
    {
        PIN_GPIO70,
        ( PIN_MODE(2) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D2 -> GPIO7 (P1) */
    {
        PIN_GPIO7,
        ( PIN_MODE(2) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D3 -> GPIO69 (L1) */
    {
        PIN_GPIO69,
        ( PIN_MODE(2) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D4 -> GPIO76 (R4) */
    {
        PIN_GPIO76,
        ( PIN_MODE(2) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D5 -> GPIO67 (K1) */
    {
        PIN_GPIO67,
        ( PIN_MODE(2) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D6 -> GPIO8 (P2) */
    {
        PIN_GPIO8,
        ( PIN_MODE(2) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_D7 -> GPIO68 (L4) */
    {
        PIN_GPIO68,
        ( PIN_MODE(2) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_DQS -> GPIO9 (N2) */
    {
        PIN_GPIO9,
        ( PIN_MODE(2) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* OSPI0 pin config */
    /* OSPI0_RESET_OUT0 -> GPIO61 (K4) */
    {
        PIN_GPIO61,
        ( PIN_MODE(2) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },

            /* I2C0 pin config */
    /* I2C0_SCL -> GPIO135 (A15) */
    {
        PIN_GPIO135,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* I2C0 pin config */
    /* I2C0_SDA -> GPIO134 (B15) */
    {
        PIN_GPIO134,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },

            /* UART0 pin config */
    /* UART0_RXD -> GPIO27 (A8) */
    {
        PIN_GPIO27,
        ( PIN_MODE(0) | PIN_PULL_DISABLE | PIN_SLEW_RATE_LOW )
    },
    /* UART0 pin config */
    /* UART0_TXD -> GPIO28 (B8) */
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


