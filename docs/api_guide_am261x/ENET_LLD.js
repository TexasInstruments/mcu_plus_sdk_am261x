var ENET_LLD =
[
    [ "Enet LLD Introduction", "enetlld_top.html", [
      [ "Introduction", "enetlld_top.html#enetlld_intro", null ],
      [ "Application Programming Interface", "enetlld_top.html#enetlld_api_overview", [
        [ "Control path API", "enetlld_top.html#autotoc_md1336", null ],
        [ "Data path (DMA) API", "enetlld_top.html#autotoc_md1337", null ],
        [ "Life cycle of an Enet LLD based application", "enetlld_top.html#autotoc_md1338", null ]
      ] ],
      [ "Enet Peripherals", "enetlld_top.html#enetlld_enetpers", [
        [ "CPSW Peripheral", "enetlld_top.html#enetper_cpsw", null ]
      ] ],
      [ "Document Revision History", "enetlld_top.html#enetlld_hist", null ]
    ] ],
    [ "Enet LLD IOCTL interface", "enet_ioctl_interface.html", [
      [ "Introduction", "enet_ioctl_interface.html#enet_ioctl_intro", [
        [ "Using the IOCTL interface", "enet_ioctl_interface.html#using_enet_ioctl", null ],
        [ "Synchronous and Asynchronous IOCTLs", "enet_ioctl_interface.html#enet_async_ioctl", null ]
      ] ]
    ] ],
    [ "Ethernet PHY Link Configuration", "enetphy_link_config_top.html", [
      [ "Link Configuration Guidelines", "enetphy_link_config_top.html#enetphy_link_config_guidelines", [
        [ "Manual Mode", "enetphy_link_config_top.html#enetphy_link_manual", [
          [ "Half-Duplex Mode", "enetphy_link_config_top.html#enetphy_link_manual_half_duplex", null ],
          [ "Full-Duplex Mode", "enetphy_link_config_top.html#enetphy_link_manual_full_duplex", null ]
        ] ],
        [ "Auto-Negotiation Mode", "enetphy_link_config_top.html#enetphy_link_autoneg", null ],
        [ "Strapping", "enetphy_link_config_top.html#enetphy_link_strapping", null ]
      ] ]
    ] ],
    [ "Ethernet PHY Integration Guide", "phy_integration_guide_top.html", "phy_integration_guide_top" ],
    [ "MAC2MAC support", "enet_mac2mac_top.html", [
      [ "Introduction", "enet_mac2mac_top.html#mac2mac_intro", null ],
      [ "Enable MAC2MAC through Sysconfig", "enet_mac2mac_top.html#mac2mac_syscfg_support", null ]
    ] ],
    [ "Enet Integration Guide", "enet_integration_guide_top.html", [
      [ "Introduction", "enet_integration_guide_top.html#cpsw_integration_guide_intro", null ],
      [ "Getting Familiar with Enet LLD APIs", "enet_integration_guide_top.html#GettingFamiliarWithAPIs", [
        [ "IOCTL Interface", "enet_integration_guide_top.html#IOCTL_description", null ]
      ] ],
      [ "Integrating Enet LLD into User's Application", "enet_integration_guide_top.html#enet_integration_in_app", [
        [ "Init Sequence", "enet_integration_guide_top.html#enet_init_sequence", null ],
        [ "Peripheral Open Sequence", "enet_integration_guide_top.html#enet_open_sequence", null ],
        [ "Port Open Sequence", "enet_integration_guide_top.html#enet_openport_sequence", [
          [ "MAC-PHY link", "enet_integration_guide_top.html#autotoc_md1339", null ],
          [ "MAC-to-MAC link", "enet_integration_guide_top.html#autotoc_md1340", null ]
        ] ],
        [ "Packet Send/Receive Sequence", "enet_integration_guide_top.html#enet_pktrxtx_sequence", null ],
        [ "IOCTL Sequence", "enet_integration_guide_top.html#enet_ioctl_sequence", null ],
        [ "Port Close Sequence", "enet_integration_guide_top.html#enet_closeport_sequence", null ],
        [ "Peripheral Close Sequence", "enet_integration_guide_top.html#enet_close_sequence", null ],
        [ "Deinit Sequence", "enet_integration_guide_top.html#enet_deinit_sequence", null ],
        [ "Peripheral-specific", "enet_integration_guide_top.html#enetper_specific_handling", null ]
      ] ]
    ] ],
    [ "MDIO Manual Mode Enablement", "enetmdio_manualmode.html", [
      [ "Workaround for details errata i2329-MDIO interface corruption and its impact:", "enetmdio_manualmode.html#autotoc_md1342", null ],
      [ "Limitations", "enetmdio_manualmode.html#autotoc_md1343", null ],
      [ "Not supported MDIO IOCTL APIs in MDIO Manual mode", "enetmdio_manualmode.html#autotoc_md1344", null ]
    ] ],
    [ "MDIO PHY Register Access - Clause45 Support", "enet_mdio_clause45_support.html", [
      [ "Overview", "enet_mdio_clause45_support.html#autotoc_md1345", null ],
      [ "Background", "enet_mdio_clause45_support.html#autotoc_md1346", [
        [ "Clause 22 v/s Clause 45", "enet_mdio_clause45_support.html#autotoc_md1347", null ],
        [ "MMD (Management/MDIO Manageable Device) : Required for Clause45 support", "enet_mdio_clause45_support.html#autotoc_md1348", null ]
      ] ],
      [ "Implementation Requirements", "enet_mdio_clause45_support.html#autotoc_md1349", null ],
      [ "Implementation Steps", "enet_mdio_clause45_support.html#autotoc_md1350", [
        [ "Step-1: Modify PHY Driver code with the MMD register as an input argument", "enet_mdio_clause45_support.html#autotoc_md1351", null ],
        [ "Step-2: Update EnetPhy Configuration", "enet_mdio_clause45_support.html#autotoc_md1352", null ],
        [ "Step-3: Common PHY registers access, such as PHY alive, PHY link status, etc uses Clause 22 in order to suport backward compatibility. Replace them with Clause 45 support", "enet_mdio_clause45_support.html#autotoc_md1353", null ]
      ] ],
      [ "Detailed API Reference", "enet_mdio_clause45_support.html#autotoc_md1354", [
        [ "Clause 45 Read Operation", "enet_mdio_clause45_support.html#autotoc_md1355", null ],
        [ "Clause 45 Write Operation", "enet_mdio_clause45_support.html#autotoc_md1356", null ],
        [ "Clause 45 Read-Modify-Write Operation", "enet_mdio_clause45_support.html#autotoc_md1357", null ]
      ] ],
      [ "Key Parameters Explained", "enet_mdio_clause45_support.html#autotoc_md1358", null ],
      [ "Current Limitations", "enet_mdio_clause45_support.html#autotoc_md1359", null ],
      [ "Summary", "enet_mdio_clause45_support.html#autotoc_md1360", null ],
      [ "Limitations", "enet_mdio_clause45_support.html#autotoc_md1361", null ]
    ] ],
    [ "ENET IET Frame Pre-emption userguide", "enet_iet_userguide.html", [
      [ "Introduction", "enet_iet_userguide.html#autotoc_md1362", [
        [ "IEEE 802.1Qbu IET", "enet_iet_userguide.html#autotoc_md1363", null ]
      ] ],
      [ "IET Architecture", "enet_iet_userguide.html#autotoc_md1364", null ],
      [ "Enet LLD API", "enet_iet_userguide.html#autotoc_md1365", null ],
      [ "Limitations", "enet_iet_userguide.html#autotoc_md1366", null ]
    ] ],
    [ "Ethernet Performance on AM261x", "enetlld_performance.html", [
      [ "Introduction", "enetlld_performance.html#autotoc_md1380", null ],
      [ "Setup Details", "enetlld_performance.html#autotoc_md1381", null ],
      [ "Layer 2 Performance", "enetlld_performance.html#autotoc_md1382", [
        [ "Configuration Details", "enetlld_performance.html#autotoc_md1383", null ],
        [ "Layer 2 Latency", "enetlld_performance.html#autotoc_md1384", [
          [ "Layer-2 Hardware Switching Latency for CPSW", "enetlld_performance.html#autotoc_md1385", null ],
          [ "Test Setup", "enetlld_performance.html#autotoc_md1386", null ],
          [ "CPSW Latency for RGMII", "enetlld_performance.html#autotoc_md1387", null ]
        ] ]
      ] ],
      [ "TCP/IP Performance", "enetlld_performance.html#autotoc_md1388", [
        [ "Configuration Details", "enetlld_performance.html#autotoc_md1389", [
          [ "TCP Throughput", "enetlld_performance.html#autotoc_md1390", null ],
          [ "UDP Throughput", "enetlld_performance.html#autotoc_md1391", null ]
        ] ]
      ] ],
      [ "XIP Performance", "enetlld_performance.html#networking_xip_performance", null ],
      [ "See Also", "enetlld_performance.html#autotoc_md1392", null ]
    ] ],
    [ "Enet EST/TAS Support", "enet_tas_top.html", [
      [ "Introduction", "enet_tas_top.html#enet_est_intro", [
        [ "IEEE 802.1Qbv EST/TAS", "enet_tas_top.html#enet_est_intro_est_tas", null ],
        [ "Guard band", "enet_tas_top.html#enet_est_intro_guard_band", null ]
      ] ],
      [ "Enet LLD API", "enet_tas_top.html#enet_est_api", null ],
      [ "CPSW Support", "enet_tas_top.html#enet_est_cpsw", [
        [ "CPSW EST Driver Implementation", "enet_tas_top.html#enet_est_cpsw_driver", null ],
        [ "Programing Guidelines and Limitations", "enet_tas_top.html#enet_est_cpsw_guidelines", [
          [ "Administrative base time", "enet_tas_top.html#enet_est_cpsw_guidelines_admin_basetime", null ],
          [ "Gate control list", "enet_tas_top.html#enet_est_cpsw_guidelines_gate_control_list", null ],
          [ "Guard band", "enet_tas_top.html#enet_est_cpsw_guidelines_guard_band", null ],
          [ "Link-down event", "enet_tas_top.html#enet_est_cpsw_guidelines_link_down", null ],
          [ "Limitations", "enet_tas_top.html#enet_est_cpsw_limitations", null ]
        ] ],
        [ "Debugging and Troubleshooting", "enet_tas_top.html#enet_est_cpsw_debugging", [
          [ "EST Timestamping", "enet_tas_top.html#enet_est_cpsw_timestamping", null ],
          [ "CCS Debug GEL Files", "enet_tas_top.html#enet_est_cpsw_gels", null ]
        ] ]
      ] ]
    ] ],
    [ "Enet Migration Guide", "enet_migration_guide_top.html", [
      [ "Introduction", "enet_migration_guide_top.html#enet_migration_guide_intro", null ],
      [ "Need for sysconfig", "enet_migration_guide_top.html#NeedForSysconfig", null ],
      [ "Enet Driver Initialization Sequence Change", "enet_migration_guide_top.html#EnetInitSeqChange", null ],
      [ "Enet DMA channel open changes", "enet_migration_guide_top.html#EnetDmaChOpenChange", null ],
      [ "Enet DMA channel override Enable", "enet_migration_guide_top.html#EnetDmaChOverrideChange", null ],
      [ "Runtime Control API (Enet_ioctl) change", "enet_migration_guide_top.html#EnetIoctlChange", null ],
      [ "Packet Transmit/Receive API related changes", "enet_migration_guide_top.html#PacketTxRxChange", null ],
      [ "Custom Board Support", "enet_migration_guide_top.html#CustomBoardSupport", null ],
      [ "External PHY management", "enet_migration_guide_top.html#ExternalPhyManagement", null ],
      [ "Tuning memory usage of enet driver for non-lwip apps", "enet_migration_guide_top.html#MemoryTuningNonLwip", null ],
      [ "Tuning memory usage of enet driver for lwip apps", "enet_migration_guide_top.html#MemoryTuningLwip", null ]
    ] ],
    [ "Ethernet Add-on Boards", "ETHERNET_ADDON_BOARDS_TOP.html", [
      [ "Introduction", "ETHERNET_ADDON_BOARDS_TOP.html#ethernet_addon_boards_intro", [
        [ "Important Usage Guidelines", "ETHERNET_ADDON_BOARDS_TOP.html#autotoc_md1374", null ]
      ] ]
    ] ],
    [ "Software modification needeed to use Rev-E1 and Rev-E2 version of LP-AM261 EVM", "AM261X_LP_E1_E2_SUPPORT.html", null ],
    [ "Ethernet Packet Pool Allocation Guidelines", "PACKETPOOL_CONFIG_TOP.html", null ],
    [ "Ethernet interface (RGMII / MII) selection", "enet_interface_selection.html", null ]
];