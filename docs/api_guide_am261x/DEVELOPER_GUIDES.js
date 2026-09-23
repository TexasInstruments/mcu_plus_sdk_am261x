var DEVELOPER_GUIDES =
[
    [ "Installing SDK at non-default location", "INSTALL_NON_DEFAULT.html", [
      [ "Introduction", "INSTALL_NON_DEFAULT.html#autotoc_md523", null ],
      [ "SDK Installation", "INSTALL_NON_DEFAULT.html#autotoc_md524", [
        [ "Using Makefiles", "INSTALL_NON_DEFAULT.html#autotoc_md525", null ],
        [ "Using CCS Projects", "INSTALL_NON_DEFAULT.html#autotoc_md526", null ]
      ] ],
      [ "SysConfig Installation", "INSTALL_NON_DEFAULT.html#autotoc_md527", [
        [ "Using Makefiles", "INSTALL_NON_DEFAULT.html#autotoc_md528", null ],
        [ "Using CCS Projects", "INSTALL_NON_DEFAULT.html#autotoc_md529", null ]
      ] ],
      [ "TI CLANG Compiler Toolchain Installation", "INSTALL_NON_DEFAULT.html#autotoc_md530", [
        [ "Using Makefiles", "INSTALL_NON_DEFAULT.html#autotoc_md531", null ],
        [ "Using CCS Projects", "INSTALL_NON_DEFAULT.html#autotoc_md532", null ]
      ] ],
      [ "CCS Installation", "INSTALL_NON_DEFAULT.html#autotoc_md533", [
        [ "Using Makefiles", "INSTALL_NON_DEFAULT.html#autotoc_md534", null ],
        [ "Using CCS Projects", "INSTALL_NON_DEFAULT.html#autotoc_md535", null ]
      ] ],
      [ "Other Tools", "INSTALL_NON_DEFAULT.html#autotoc_md536", null ]
    ] ],
    [ "Understanding inter-processor communication (IPC)", "IPC_GUIDE.html", [
      [ "Introduction", "IPC_GUIDE.html#autotoc_md505", null ],
      [ "Additional References", "IPC_GUIDE.html#autotoc_md506", null ],
      [ "IPC SW Architecture", "IPC_GUIDE.html#autotoc_md507", [
        [ "IPC Notify and IPC RP Message", "IPC_GUIDE.html#autotoc_md508", null ],
        [ "Important usage points", "IPC_GUIDE.html#autotoc_md509", null ],
        [ "IPC design pattern", "IPC_GUIDE.html#autotoc_md510", null ],
        [ "SafeIPC Design", "IPC_GUIDE.html#autotoc_md511", null ]
      ] ],
      [ "Enabling IPC in applications", "IPC_GUIDE.html#autotoc_md512", [
        [ "Enable IPC in SysConfig", "IPC_GUIDE.html#autotoc_md513", null ],
        [ "Update linker command file", "IPC_GUIDE.html#autotoc_md514", null ],
        [ "Update MMU/MPU for the CPU", "IPC_GUIDE.html#autotoc_md515", null ],
        [ "Sync with CPUs", "IPC_GUIDE.html#autotoc_md516", null ],
        [ "Start using the APIs", "IPC_GUIDE.html#autotoc_md517", null ]
      ] ]
    ] ],
    [ "Using MCU+ SDK Low Level Drivers (LLD's)", "LLD_GUIDE.html", [
      [ "Introduction", "LLD_GUIDE.html#autotoc_md518", null ],
      [ "LLD SW Architecture", "LLD_GUIDE.html#autotoc_md519", null ],
      [ "SysCfg Support", "LLD_GUIDE.html#autotoc_md520", null ],
      [ "Steps to use LLD Drivers in Application", "LLD_GUIDE.html#autotoc_md521", null ],
      [ "Additional References", "LLD_GUIDE.html#autotoc_md522", null ]
    ] ],
    [ "Understanding the bootflow and bootloaders", "BOOTFLOW_GUIDE.html", "BOOTFLOW_GUIDE" ],
    [ "Understanding Multicore ELF image format", "MCELF_LANDING.html", [
      [ "Introduction", "MCELF_LANDING.html#autotoc_md689", null ],
      [ "RPRC vs MCELF", "MCELF_LANDING.html#autotoc_md690", null ],
      [ "Generation of MCELF images", "MCELF_LANDING.html#autotoc_md691", null ],
      [ "Booting MCELF images", "MCELF_LANDING.html#autotoc_md692", null ],
      [ "Limitations", "MCELF_LANDING.html#autotoc_md693", null ]
    ] ],
    [ "Using SDK with CCS Projects", "CCS_PROJECTS_PAGE.html", [
      [ "Introduction", "CCS_PROJECTS_PAGE.html#autotoc_md454", null ],
      [ "CCS Projectspec and CCS Projects", "CCS_PROJECTS_PAGE.html#autotoc_md455", null ],
      [ "Import a Project in CCS", "CCS_PROJECTS_PAGE.html#autotoc_md456", null ],
      [ "Browse a Project in CCS", "CCS_PROJECTS_PAGE.html#autotoc_md457", null ],
      [ "Build a Project in CCS", "CCS_PROJECTS_PAGE.html#autotoc_md458", null ],
      [ "Build System Projects in CCS", "CCS_PROJECTS_PAGE.html#autotoc_md459", null ],
      [ "1 Click Debug with CCS Projects", "CCS_PROJECTS_PAGE.html#CCS_PROJECTS_1CLICK_DEBUG", null ],
      [ "Delete a Project in CCS", "CCS_PROJECTS_PAGE.html#autotoc_md460", null ]
    ] ],
    [ "Using SDK with IAR Embedded Workbench Projects", "IAR_PROJECTS_PAGE.html", [
      [ "Introduction", "IAR_PROJECTS_PAGE.html#autotoc_md461", null ],
      [ "Setup IAR EW IDE", "IAR_PROJECTS_PAGE.html#autotoc_md462", null ],
      [ "IAR Projects Files", "IAR_PROJECTS_PAGE.html#autotoc_md463", null ],
      [ "Configure SDK path to IDE", "IAR_PROJECTS_PAGE.html#autotoc_md464", null ],
      [ "Import a Workspace in IAR EW", "IAR_PROJECTS_PAGE.html#autotoc_md465", null ],
      [ "Build a Project in IAR Embedded Workbench", "IAR_PROJECTS_PAGE.html#autotoc_md466", null ],
      [ "Build System Projects in IAR Embedded Workbench [Not Supported]", "IAR_PROJECTS_PAGE.html#autotoc_md467", null ],
      [ "Load and Run Executables Built with IAR Projects", "IAR_PROJECTS_PAGE.html#autotoc_md468", null ]
    ] ],
    [ "PSRAM at 133 MHz in Mode 2", "PSRAM_133MHZ_MODE2_GUIDE.html", [
      [ "Overview", "PSRAM_133MHZ_MODE2_GUIDE.html#autotoc_md737", null ],
      [ "Prerequisites: Core PLL at 2000 MHz", "PSRAM_133MHZ_MODE2_GUIDE.html#autotoc_md739", null ],
      [ "Step 1 — SBL: Exclude the SysCfg PLL config and let the bootloader default run", "PSRAM_133MHZ_MODE2_GUIDE.html#autotoc_md741", [
        [ "1a — SysCfg: mark the file excluded from build", "PSRAM_133MHZ_MODE2_GUIDE.html#autotoc_md742", null ],
        [ "1b — Makefile: remove the source file and update SYSCFG_GEN_FILES", "PSRAM_133MHZ_MODE2_GUIDE.html#autotoc_md743", null ],
        [ "Why this works", "PSRAM_133MHZ_MODE2_GUIDE.html#autotoc_md744", null ]
      ] ],
      [ "Step 2 — SBL and Application: Override the OSPI input clock frequency in SysCfg", "PSRAM_133MHZ_MODE2_GUIDE.html#autotoc_md746", null ],
      [ "Important: Flash is also capped at 133 MHz", "PSRAM_133MHZ_MODE2_GUIDE.html#autotoc_md748", null ],
      [ "Step 3 — Every downstream application that uses OSPI", "PSRAM_133MHZ_MODE2_GUIDE.html#autotoc_md750", null ],
      [ "Reference Example", "PSRAM_133MHZ_MODE2_GUIDE.html#autotoc_md752", null ],
      [ "Summary Checklist", "PSRAM_133MHZ_MODE2_GUIDE.html#autotoc_md754", null ]
    ] ],
    [ "Using SDK with Makefiles", "MAKEFILE_BUILD_PAGE.html", [
      [ "Introduction", "MAKEFILE_BUILD_PAGE.html#autotoc_md469", null ],
      [ "Enabling \"make\" in Windows", "MAKEFILE_BUILD_PAGE.html#autotoc_md470", null ],
      [ "Building Libraries with Makefiles", "MAKEFILE_BUILD_PAGE.html#autotoc_md471", [
        [ "Selecting Compiler Toolchain", "MAKEFILE_BUILD_PAGE.html#autotoc_md472", null ]
      ] ],
      [ "Building examples with makefiles", "MAKEFILE_BUILD_PAGE.html#MAKEFILE_EXAMPLE_BUILD", null ],
      [ "Building System Examples with Makefiles", "MAKEFILE_BUILD_PAGE.html#autotoc_md473", null ],
      [ "Building the Whole SDK with Makefiles", "MAKEFILE_BUILD_PAGE.html#autotoc_md474", null ],
      [ "Load and Run Executables Built with Makefiles", "MAKEFILE_BUILD_PAGE.html#autotoc_md475", null ],
      [ "Tips and Tricks when working with Makefiles", "MAKEFILE_BUILD_PAGE.html#autotoc_md476", null ]
    ] ],
    [ "Using SDK with Real-time Object View (ROV)", "ROV_INTRO_PAGE.html", [
      [ "Introduction", "ROV_INTRO_PAGE.html#autotoc_md554", null ],
      [ "Features Supported", "ROV_INTRO_PAGE.html#autotoc_md555", null ],
      [ "Features NOT Supported", "ROV_INTRO_PAGE.html#autotoc_md556", null ],
      [ "Using ROV with SDK examples", "ROV_INTRO_PAGE.html#autotoc_md557", null ],
      [ "Enabling ROV in your project", "ROV_INTRO_PAGE.html#autotoc_md558", null ],
      [ "Enabling ROV with makefile", "ROV_INTRO_PAGE.html#autotoc_md559", null ],
      [ "Important Usage Guidelines", "ROV_INTRO_PAGE.html#autotoc_md560", null ]
    ] ],
    [ "Enabling Secure Boot", "SECURE_BOOT.html", [
      [ "Secure Devices and Secure Boot: An Introduction", "SECURE_BOOT.html#autotoc_md477", null ],
      [ "Secure Boot Process", "SECURE_BOOT.html#autotoc_md478", null ],
      [ "Keyring Support", "SECURE_BOOT.html#autotoc_md479", null ],
      [ "Secure Boot Support in SDK", "SECURE_BOOT.html#autotoc_md480", [
        [ "Device configuration file", "SECURE_BOOT.html#autotoc_md481", null ],
        [ "Signing tool", "SECURE_BOOT.html#autotoc_md482", null ],
        [ "Generating Secure Boot Image", "SECURE_BOOT.html#autotoc_md483", [
          [ "HSMRt Image Generation", "SECURE_BOOT.html#autotoc_md484", null ],
          [ "SBL Image Generation", "SECURE_BOOT.html#SBL_SECURE_IMAGE", null ],
          [ "Secure application image Generation", "SECURE_BOOT.html#APPLICATION_SECURE_IMAGE", [
            [ "RSASSA-PSS Support", "SECURE_BOOT.html#autotoc_md485", null ],
            [ "Auxiliary Keys Support", "SECURE_BOOT.html#autotoc_md486", null ]
          ] ]
        ] ],
        [ "Encryption support for application images", "SECURE_BOOT.html#autotoc_md487", [
          [ "Encryption support for application images using auxiliary keys", "SECURE_BOOT.html#autotoc_md488", null ]
        ] ]
      ] ],
      [ "Limitations in Secure Boot", "SECURE_BOOT.html#autotoc_md489", null ]
    ] ],
    [ "Achieving Fast Secure Boot and Boot time calculator", "FAST_SECURE_BOOT.html", [
      [ "Achieving Fast Secure Boot", "FAST_SECURE_BOOT.html#autotoc_md490", [
        [ "Introduction", "FAST_SECURE_BOOT.html#autotoc_md491", null ],
        [ "Steps to build, flash, load and run secure applications", "FAST_SECURE_BOOT.html#autotoc_md492", null ]
      ] ],
      [ "Component wise secure boot time measurement", "FAST_SECURE_BOOT.html#autotoc_md493", null ],
      [ "Boot time calculator", "FAST_SECURE_BOOT.html#autotoc_md494", null ]
    ] ],
    [ "Using SDK with SysConfig", "SYSCONFIG_INTRO_PAGE.html", [
      [ "Introduction", "SYSCONFIG_INTRO_PAGE.html#autotoc_md495", [
        [ "SysConfig Features used in the SDK", "SYSCONFIG_INTRO_PAGE.html#autotoc_md496", null ]
      ] ],
      [ "Opening SysConfig GUI from CCS", "SYSCONFIG_INTRO_PAGE.html#autotoc_md497", null ],
      [ "Opening SysConfig GUI from command line and makefiles", "SYSCONFIG_INTRO_PAGE.html#autotoc_md498", null ],
      [ "Using the SysConfig GUI", "SYSCONFIG_INTRO_PAGE.html#autotoc_md499", null ],
      [ "Generating Files using SysConfig", "SYSCONFIG_INTRO_PAGE.html#autotoc_md500", null ],
      [ "Understanding Generated Files", "SYSCONFIG_INTRO_PAGE.html#autotoc_md501", null ],
      [ "Tips and Tricks for SysConfig", "SYSCONFIG_INTRO_PAGE.html#autotoc_md502", null ]
    ] ],
    [ "Using SDK with TI Resource Explorer", "TIREX_INTRO_PAGE.html", [
      [ "Introduction", "TIREX_INTRO_PAGE.html#autotoc_md503", null ],
      [ "Using TI Resource Explorer from Browser", "TIREX_INTRO_PAGE.html#TIREX_BROWSER_USAGE", null ],
      [ "Using TI Resource Explorer from Desktop CCS", "TIREX_INTRO_PAGE.html#autotoc_md504", null ]
    ] ],
    [ "Adding Support For a Custom Flash Device", "CUSTOM_FLASH_SUPPORT_GUIDE.html", [
      [ "Introduction", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md595", [
        [ "Serial Flash Discoverable Parameters (SFDP)", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md596", null ]
      ] ],
      [ "Summary of steps needed to enable a new flash device", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md597", null ],
      [ "Step 1: Building the OSPI Flash Diagnostic example", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md598", null ],
      [ "Step 2: Configuring the flash via SysConfig", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md599", [
        [ "Selecting a Supported Flash on AM261x (LaunchPad)", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md600", null ],
        [ "Custom Flash Configuration", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md601", null ],
        [ "Case 1: Flash Supports SFDP", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md602", null ],
        [ "Case 2: Flash Doesn't Support SFDP", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md603", null ],
        [ "Case 3 (Rare Scenario): Flash Supports SFDP, but Protocol Configuration is Custom", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md604", null ]
      ] ],
      [ "Obtaining flash details from the SFDP table OR datasheet", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md605", null ],
      [ "Miscellaneous Debugging Tips and Tricks", "CUSTOM_FLASH_SUPPORT_GUIDE.html#autotoc_md606", null ]
    ] ],
    [ "Using MCU+SDK with CCS Cloud", "CCS_CLOUD_INTRO_PAGE.html", [
      [ "Introduction", "CCS_CLOUD_INTRO_PAGE.html#autotoc_md561", null ],
      [ "Importing an example project to CCS Cloud", "CCS_CLOUD_INTRO_PAGE.html#autotoc_md562", null ],
      [ "Building an example project", "CCS_CLOUD_INTRO_PAGE.html#autotoc_md563", null ],
      [ "Running an example on the EVM/LaunchPad connected to the PC", "CCS_CLOUD_INTRO_PAGE.html#autotoc_md565", null ],
      [ "Debugging the example", "CCS_CLOUD_INTRO_PAGE.html#autotoc_md566", null ],
      [ "Example Logs", "CCS_CLOUD_INTRO_PAGE.html#autotoc_md567", null ]
    ] ],
    [ "Enabling Real Time Debug", "REAL_TIME_DEBUG_SUPPORT_GUIDE.html", [
      [ "Introduction", "REAL_TIME_DEBUG_SUPPORT_GUIDE.html#autotoc_md568", null ],
      [ "Confirm CCS Features", "REAL_TIME_DEBUG_SUPPORT_GUIDE.html#autotoc_md569", null ],
      [ "Create Target Configuration File", "REAL_TIME_DEBUG_SUPPORT_GUIDE.html#autotoc_md570", null ],
      [ "Add Serial Command Monitor Software", "REAL_TIME_DEBUG_SUPPORT_GUIDE.html#autotoc_md571", null ],
      [ "Launch Real Time Debug", "REAL_TIME_DEBUG_SUPPORT_GUIDE.html#autotoc_md572", null ]
    ] ],
    [ "Performance Optimizations Guide", "PERFORMANCE_OPTIMIZATIONS_GUIDE.html", "PERFORMANCE_OPTIMIZATIONS_GUIDE" ],
    [ "Interrupt Priority Mask based Critical Sections for R5F", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html", [
      [ "Introduction", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md537", null ],
      [ "FreeRTOS Use Case", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md538", [
        [ "Enabling Interrupt Priority Mask Based Critical Sections", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md539", null ],
        [ "Entering and Exiting Critical Sections (FreeRTOS)", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md540", [
          [ "Nested Critical Sections (FreeRTOS)", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md541", null ],
          [ "Pseudocode Example (Task Context)", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md542", null ],
          [ "Pseudocode Example (ISR Context, with nested interrupts enabled)", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md543", null ]
        ] ]
      ] ],
      [ "NoRTOS Use Case", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md544", [
        [ "Entering and Exiting Critical Sections (NoRTOS)", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md545", [
          [ "Pseudocode Example", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md546", null ]
        ] ]
      ] ],
      [ "Example Case Study: Deep Nested Critical Sections", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md547", [
        [ "Scenario Overview", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md548", [
          [ "Additional Notes on Interrupt Triggering and Execution Order", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md549", null ]
        ] ],
        [ "Step-by-Step Execution", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md550", null ],
        [ "Execution Flow", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md551", null ],
        [ "Pseudocode", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md552", null ],
        [ "Key Observations", "INTERRUPT_PRIORITY_BASED_CRITICAL_SECTIONS_R5F.html#autotoc_md553", null ]
      ] ]
    ] ],
    [ "Enabling AM26x EVM Configuration Support in SysConfig", "EVM_SYSCONFIG_GUIDE.html", [
      [ "Introduction", "EVM_SYSCONFIG_GUIDE.html#autotoc_md423", [
        [ "EVM Features Enabled by SysConfig", "EVM_SYSCONFIG_GUIDE.html#autotoc_md424", null ]
      ] ],
      [ "Enabling EVM Support in SysConfig - Standalone", "EVM_SYSCONFIG_GUIDE.html#autotoc_md425", [
        [ "Configuring on-board Peripheral Hardware", "EVM_SYSCONFIG_GUIDE.html#autotoc_md426", null ],
        [ "Enabling External Header Signals", "EVM_SYSCONFIG_GUIDE.html#autotoc_md427", null ],
        [ "Enabling Header Signals via PinMux", "EVM_SYSCONFIG_GUIDE.html#autotoc_md428", null ]
      ] ],
      [ "Non-Configurable Interfaces", "EVM_SYSCONFIG_GUIDE.html#autotoc_md429", null ],
      [ "SDK Example", "EVM_SYSCONFIG_GUIDE.html#autotoc_md430", null ]
    ] ],
    [ "Enabling XIP or eXecute In Place", "BOOTFLOW_XIP.html", [
      [ "Introduction", "BOOTFLOW_XIP.html#autotoc_md442", null ],
      [ "Additional References", "BOOTFLOW_XIP.html#autotoc_md443", null ],
      [ "Pre-requisites", "BOOTFLOW_XIP.html#autotoc_md444", null ],
      [ "Enable XIP for an application", "BOOTFLOW_XIP.html#autotoc_md445", [
        [ "Using linker.cmd", "BOOTFLOW_XIP.html#autotoc_md446", null ],
        [ "Using Memory Configurator", "BOOTFLOW_XIP.html#autotoc_md447", [
          [ "Moving .rodata and .text to flash", "BOOTFLOW_XIP.html#autotoc_md448", null ],
          [ "Moving cfg rodata to internal memory", "BOOTFLOW_XIP.html#autotoc_md449", null ],
          [ "Moving CIO to internal memory", "BOOTFLOW_XIP.html#autotoc_md450", null ]
        ] ]
      ] ],
      [ "Enabling secure XIP using OTFA", "BOOTFLOW_XIP.html#autotoc_md451", [
        [ "Steps enable security in XIP image,", "BOOTFLOW_XIP.html#autotoc_md452", null ]
      ] ],
      [ "Debugging XIP applications", "BOOTFLOW_XIP.html#autotoc_md453", null ]
    ] ],
    [ "Configuring OptiFlash various IP", "OPTIFLASH_CONFIGURE.html", [
      [ "Introduction", "OPTIFLASH_CONFIGURE.html#autotoc_md671", null ],
      [ "How to configure RL2?", "OPTIFLASH_CONFIGURE.html#autotoc_md672", null ],
      [ "How to configure FLC.", "OPTIFLASH_CONFIGURE.html#autotoc_md673", null ],
      [ "How to configure RAT.", "OPTIFLASH_CONFIGURE.html#autotoc_md674", null ]
    ] ],
    [ "Migrating examples from package to package in AM261X", "SOC_MIGRATION.html", [
      [ "Installing dependencies", "SOC_MIGRATION.html#autotoc_md578", null ],
      [ "Setup", "SOC_MIGRATION.html#autotoc_md579", null ],
      [ "Migrating examples to AM261x variant/package", "SOC_MIGRATION.html#autotoc_md580", [
        [ "Excluding examples from migration", "SOC_MIGRATION.html#autotoc_md581", null ]
      ] ]
    ] ],
    [ "Trigonometric Math Unit Guide", "TMU_GUIDE.html", [
      [ "Introduction", "TMU_GUIDE.html#autotoc_md582", null ],
      [ "Support for Trigonometric Operations", "TMU_GUIDE.html#autotoc_md583", [
        [ "SIN Operation", "TMU_GUIDE.html#autotoc_md584", null ],
        [ "COS Operation", "TMU_GUIDE.html#autotoc_md585", null ],
        [ "ATAN Operation", "TMU_GUIDE.html#autotoc_md586", null ],
        [ "IEXP Operation", "TMU_GUIDE.html#autotoc_md587", null ],
        [ "LOG Operation", "TMU_GUIDE.html#autotoc_md588", null ],
        [ "QUADF Operation", "TMU_GUIDE.html#autotoc_md589", null ]
      ] ],
      [ "Context Save and Restore", "TMU_GUIDE.html#autotoc_md590", null ],
      [ "Compiler Support", "TMU_GUIDE.html#autotoc_md591", null ],
      [ "Steps to use TMU APIs", "TMU_GUIDE.html#autotoc_md592", null ],
      [ "See Also", "TMU_GUIDE.html#autotoc_md593", null ]
    ] ],
    [ "How to A/B Swap? Working of bootseg IP", "bootseg_ip_working.html", [
      [ "Introduction", "bootseg_ip_working.html#autotoc_md681", null ],
      [ "How to make 1st Half as Active Region", "bootseg_ip_working.html#autotoc_md682", null ],
      [ "How to make 2nd Half as Active Region", "bootseg_ip_working.html#autotoc_md683", null ]
    ] ],
    [ "How to use Flash Operation Scheduler Hardware", "FLSOPSKD_IP.html", [
      [ "Introduction", "FLSOPSKD_IP.html#autotoc_md684", [
        [ "Why is FLSOPSKD Hardware Engine?", "FLSOPSKD_IP.html#autotoc_md685", null ],
        [ "What is FLSOPSKD Hardware Engine?", "FLSOPSKD_IP.html#autotoc_md686", null ]
      ] ],
      [ "Example Firmware", "FLSOPSKD_IP.html#autotoc_md687", null ],
      [ "Using FLSOPSKD in Application", "FLSOPSKD_IP.html#autotoc_md688", null ]
    ] ],
    [ "Enabling safety on external flash", "OPTIFLASH_ECCM.html", [
      [ "Introduction", "OPTIFLASH_ECCM.html#autotoc_md729", null ],
      [ "How to enable ECCM module", "OPTIFLASH_ECCM.html#autotoc_md730", [
        [ "Write a config file", "OPTIFLASH_ECCM.html#autotoc_md731", null ],
        [ "Using the config file", "OPTIFLASH_ECCM.html#autotoc_md732", null ]
      ] ],
      [ "Additional details", "OPTIFLASH_ECCM.html#autotoc_md733", [
        [ "ECCM Module", "OPTIFLASH_ECCM.html#autotoc_md734", null ],
        [ "Important considerations", "OPTIFLASH_ECCM.html#autotoc_md735", null ],
        [ "Seeing the change", "OPTIFLASH_ECCM.html#autotoc_md736", null ]
      ] ]
    ] ],
    [ "Optishare", "OPTIFLASH_OPTISHARE.html", [
      [ "Introduction", "OPTIFLASH_OPTISHARE.html#autotoc_md755", null ],
      [ "Optishare (Summary)", "OPTIFLASH_OPTISHARE.html#autotoc_md756", null ],
      [ "Problem Statement", "OPTIFLASH_OPTISHARE.html#autotoc_md757", null ],
      [ "OptiShare as a solution", "OPTIFLASH_OPTISHARE.html#autotoc_md758", [
        [ "Implementation", "OPTIFLASH_OPTISHARE.html#autotoc_md759", [
          [ "Compile time", "OPTIFLASH_OPTISHARE.html#autotoc_md760", [
            [ "To enable optishare in SDK example:", "OPTIFLASH_OPTISHARE.html#autotoc_md761", null ],
            [ "To enable optishare in CCS", "OPTIFLASH_OPTISHARE.html#autotoc_md762", null ]
          ] ],
          [ "Runtime", "OPTIFLASH_OPTISHARE.html#autotoc_md763", null ]
        ] ]
      ] ],
      [ "How to Implement in a project", "OPTIFLASH_OPTISHARE.html#autotoc_md764", [
        [ "Build System Changes", "OPTIFLASH_OPTISHARE.html#autotoc_md765", null ],
        [ "Memory Map Changes", "OPTIFLASH_OPTISHARE.html#autotoc_md766", null ],
        [ "MPU settings", "OPTIFLASH_OPTISHARE.html#autotoc_md767", null ],
        [ "Shared Memory Specification File (mem_spec.json)", "OPTIFLASH_OPTISHARE.html#autotoc_md768", null ],
        [ "Code Changes", "OPTIFLASH_OPTISHARE.html#autotoc_md769", null ]
      ] ],
      [ "Performance Of OptiShare", "OPTIFLASH_OPTISHARE.html#autotoc_md770", [
        [ "Building MulticoreELF Binaries with Optishare", "OPTIFLASH_OPTISHARE.html#autotoc_md771", null ]
      ] ],
      [ "Final Remark", "OPTIFLASH_OPTISHARE.html#autotoc_md772", null ]
    ] ],
    [ "Enabling Optishare In CCS", "OPTIFLASH_OPTISHARE_CCS.html", [
      [ "Introduction", "OPTIFLASH_OPTISHARE_CCS.html#autotoc_md773", null ],
      [ "Enabling Optishare", "OPTIFLASH_OPTISHARE_CCS.html#autotoc_md774", null ],
      [ "Building the Application", "OPTIFLASH_OPTISHARE_CCS.html#autotoc_md775", null ]
    ] ],
    [ "How to add compiler generated sections for instrumentation binaries?", "INSTRUMENTED_APPLICATION_SPECIAL_SECTION_ADD.html", [
      [ "Introduction", "INSTRUMENTED_APPLICATION_SPECIAL_SECTION_ADD.html#autotoc_md675", [
        [ "Using Memory Configurator", "INSTRUMENTED_APPLICATION_SPECIAL_SECTION_ADD.html#autotoc_md676", null ],
        [ "Linker changes", "INSTRUMENTED_APPLICATION_SPECIAL_SECTION_ADD.html#autotoc_md677", null ]
      ] ]
    ] ],
    [ "Changes in linker/Memory Configurator for Smart Placement", "SMART_PLACEMENT_LINKER_CHANGE.html", [
      [ "Introduction", "SMART_PLACEMENT_LINKER_CHANGE.html#autotoc_md678", null ],
      [ "Linker changes", "SMART_PLACEMENT_LINKER_CHANGE.html#autotoc_md679", null ],
      [ "Memory Configurator Changes", "SMART_PLACEMENT_LINKER_CHANGE.html#autotoc_md680", null ]
    ] ]
];