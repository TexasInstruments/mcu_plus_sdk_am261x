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

/*
 * Auto generated file 
 */

#ifndef TI_BOARD_OPEN_CLOSE_H_
#define TI_BOARD_OPEN_CLOSE_H_

#include "ti_board_config.h"

#ifdef __cplusplus
extern "C" {
#endif

/*
 * Common Functions
 */
int32_t Board_driversOpen(void);
void Board_driversClose(void);

/*
 * FLASH
 */
#include <board/flash.h>

/* FLASH Driver handles */
extern Flash_Handle gFlashHandle[CONFIG_FLASH_NUM_INSTANCES];
extern Flash_Config gFlashConfig[CONFIG_FLASH_NUM_INSTANCES];


/* FLASH Driver open/close - can be used by application when Board_driversOpen() and
 * Board_driversClose() is not used directly and app wants to control the various driver
 * open/close sequences */
int32_t Board_flashOpen(void);
void Board_flashClose(void);

/*
 * IOEXP TCA6408ARGTR
 */
#include <board/ioexp/ioexp_tca6408.h>
/* Port Number : 0, Pin Number : 0. Line Number : (Port Number * 8) + Pin Number */
#define IO_EXP_USB2_0_MUX_SEL0_LINE      (0)
/* Port Number : 0, Pin Number : 1. Line Number : (Port Number * 8) + Pin Number */
#define IO_EXP_VPP_LDO_EN_LINE      (1)
/* Port Number : 0, Pin Number : 2. Line Number : (Port Number * 8) + Pin Number */
#define IO_EXP_LED_DRIVER_EN_LINE      (2)
/* Port Number : 0, Pin Number : 3. Line Number : (Port Number * 8) + Pin Number */
#define IO_EXP_MCAN_MUX_SEL_LINE      (3)
/* Port Number : 0, Pin Number : 4. Line Number : (Port Number * 8) + Pin Number */
#define IO_EXP_BP_BO_MUX_EN_LINE      (4)
#define IO_EXP_BP_BO_MUX_EN_STATE     (TCA6408_OUT_STATE_HIGH)
/* Port Number : 0, Pin Number : 5. Line Number : (Port Number * 8) + Pin Number */
#define IO_EXP_BP_MUX_SW_S1_LINE      (5)
/* Port Number : 0, Pin Number : 6. Line Number : (Port Number * 8) + Pin Number */
#define IO_EXP_BP_BO_MUX_EN_N_LINE      (6)
/* Port Number : 0, Pin Number : 7. Line Number : (Port Number * 8) + Pin Number */
#define IO_EXP_BP_MUX_SW_SO_LINE      (7)

/* IOEXP Driver open/close - can be used by application when Board_driversOpen() */
int32_t Board_ioexpOpen(void);


#ifdef __cplusplus
}
#endif

#endif /* TI_BOARD_OPEN_CLOSE_H_ */
