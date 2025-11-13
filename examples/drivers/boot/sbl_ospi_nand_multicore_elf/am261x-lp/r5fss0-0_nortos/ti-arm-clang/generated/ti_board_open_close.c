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

#include "ti_board_open_close.h"

int32_t Board_driversOpen(void)
{
    int32_t status = SystemP_SUCCESS;
    if(status==SystemP_SUCCESS)
    {
        status = Board_flashOpen();
    }
    if(status==SystemP_SUCCESS)
    {
        status = Board_ioexpOpen();
        if(status == SystemP_FAILURE)
        {
            DebugP_log("IO Expander Configuration Failed!!\r\n");
        }
    }


    return status;
}

void Board_driversClose(void)
{

    Board_flashClose();
}

/*
 * FLASH
 */
/* FLASH Object - initialized during Flash_open() */
Flash_NandOspiObject gFlashObject_W35N01JWTBAG =
{
    .badBlockCheck = FALSE,
};

/* FLASH Driver handles - opened during Board_flashOpen() */
Flash_Handle gFlashHandle[CONFIG_FLASH_NUM_INSTANCES];

/* FLASH Attrs */
Flash_Attrs gFlashAttrs_W35N01JWTBAG =
{
    .flashName = "W35N01JWTBAG",
    .deviceId = 0xDC21,
    .manufacturerId = 0xEF,
    .flashSize = 134217728,
    .blockCount = 512,
    .blockSize = 262144,
    .pageCount = 64,
    .pageSize = 4096,

};

/* FLASH DevConfig */
Flash_NandConfig gNandFlashSpecificConfig= {
        .cmdPageLoad = 0x13,
        .cmdPageProg = 0x10,
        .cmdWrsr = 0x1F,
        .srWipReg = 0xC0,
        .xspiRdsrDummy = 7,
        .progStatusReg = 0xC0,
        .xspiProgStatusReg = 0x0000C000,
        .eraseStatusReg = 0xC0,
        .xspiEraseStatusReg = 0x0000C000,
        .srProgStatus = (1 << 3),
        .srEraseStatus = (1 << 2),
        .srWriteProtectReg = 0xA0,
        .srWriteProtectMask = 255,
};
Flash_DevConfig gFlashDevCfg_W35N01JWTBAG =
{
    .cmdExtType = OSPI_CMD_EXT_TYPE_INVERSE,
    .cmdWren = 0x06,
    .eraseCfg = {
        .blockSize = 262144,
        .cmdBlockErase = 0xD8,
    },
    .idCfg = {
        .cmd = 0x9F, /* Constant */
        .numBytes = 3,
        .dummy4 = 0,
        .dummy8 = 0,
    },
    .protocolCfg = {
        .protocol = FLASH_CFG_PROTO_1S_1S_1S,
        .isDtr = FALSE,
        .cmdRd = 0x03,
        .cmdWr = 0x84,
        .dummyClksCmd = 0,
        .dummyClksRd = 8,
        .protoCfg = {
            .isAddrReg = FALSE,
            .cmdRegRd = 0x00,
            .cmdRegWr = 0x00,
            .cfgReg = 0x00,
            .shift = 0,
            .mask = 0x00,
            .cfgRegBitP = 0,
        },
        .dummyCfg  = {
            .isAddrReg = FALSE,
            .cmdRegRd = 0x00,
            .cmdRegWr = 0x00,
            .cfgReg = 0x00,
            .shift = 0,
            .mask = 0x00,
            .cfgRegBitP = 0,
        },
    },
    .cmdRdsr = 0x0F,
    .srWip = (1 << 0),
    .nandCfg = &gNandFlashSpecificConfig
};

/* FLASH Config */
Flash_Config gFlashConfig[CONFIG_FLASH_NUM_INSTANCES] =
{
    {
        .attrs = &gFlashAttrs_W35N01JWTBAG,
        .fxns = &gFlashNandOspiFxns,
        .devConfig = &gFlashDevCfg_W35N01JWTBAG,
        .object = (void *)&gFlashObject_W35N01JWTBAG,
        .rwOffset = 0,
    },
};

/* Externs of quirk functions and custom protocol functions */
extern int32_t Flash_quirkSpansionUNHYSADisable(Flash_Config *config);

/* FLASH Open Params - populated from SysConfig options */
Flash_Params gFlashParams[CONFIG_FLASH_NUM_INSTANCES] =
{
    {
        .quirksFxn = Flash_quirkSpansionUNHYSADisable,
        .custProtoFxn = NULL,
    },
};

uint32_t gFlashConfigNum = CONFIG_FLASH_NUM_INSTANCES;

int32_t Board_flashOpen()
{
    uint32_t instCnt;
    int32_t  status = SystemP_SUCCESS;

    /* Set the peripheral instance to use in the under lying flash implementation */
    gFlashConfig[CONFIG_FLASH0].attrs->driverInstance = CONFIG_OSPI0;

    for(instCnt = 0U; instCnt < CONFIG_FLASH_NUM_INSTANCES; instCnt++)
    {
        gFlashHandle[instCnt] = NULL;   /* Init to NULL so that we can exit gracefully */
    }

    /* Set the underlying driver instance to the FLASH config */
    gFlashAttrs_W35N01JWTBAG.driverInstance = CONFIG_OSPI0;

    /* Open all instances */
    for(instCnt = 0U; instCnt < CONFIG_FLASH_NUM_INSTANCES; instCnt++)
    {

        gFlashHandle[instCnt] = Flash_open(instCnt, &gFlashParams[instCnt]);
        if(NULL == gFlashHandle[instCnt])
        {
            DebugP_logError("FLASH open failed for instance %d !!!\r\n", instCnt);
            status = SystemP_FAILURE;
            break;
        }
    }

    if(SystemP_FAILURE == status)
    {
        Board_flashClose();   /* Exit gracefully */
    }
    return status;
}

void Board_flashClose(void)
{
    uint32_t instCnt;

    /* Close all instances that are open */
    for(instCnt = 0U; instCnt < CONFIG_FLASH_NUM_INSTANCES; instCnt++)
    {
        if(gFlashHandle[instCnt] != NULL)
        {
            Flash_close(gFlashHandle[instCnt]);
            gFlashHandle[instCnt] = NULL;
        }
    }
    return;
}
/*
 * IOEXP
 */
int32_t Board_ioexpOpen()
{
    int32_t  status = SystemP_SUCCESS;
    static TCA6408_Config  gTCA6408_Config;
    TCA6408_Params      TCA6408Params;
    TCA6408_Params_init(&TCA6408Params);

    TCA6408Params.i2cInstance  =  CONFIG_I2C0;
    TCA6408Params.i2cAddress  = 0x20U;
    status = TCA6408_open(&gTCA6408_Config, &TCA6408Params);



    if(SystemP_FAILURE == status)
    {
        /* Exit gracefully */
    }

    return status;
}

