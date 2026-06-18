var ICSS_EMAC =
[
    [ "Introduction", "ICSS_EMAC.html#autotoc_md1393", null ],
    [ "Features Supported", "ICSS_EMAC.html#autotoc_md1394", null ],
    [ "SysConfig Features", "ICSS_EMAC.html#ICSS_EMAC_SYSCONFIG_FEATURES", null ],
    [ "Features not supported", "ICSS_EMAC.html#autotoc_md1395", null ],
    [ "Terms and Abbreviations", "ICSS_EMAC.html#autotoc_md1396", null ],
    [ "ICSS-EMAC Design", "ICSS_EMAC.html#autotoc_md1397", null ],
    [ "ICSS-EMAC Queue Management Design", "ICSS_EMAC.html#autotoc_md1398", null ],
    [ "Usage", "ICSS_EMAC.html#autotoc_md1399", [
      [ "Enable ICSS-EMAC in SysConfig", "ICSS_EMAC.html#autotoc_md1400", null ],
      [ "Update linker command file", "ICSS_EMAC.html#autotoc_md1401", null ],
      [ "Update MPU for the CPU", "ICSS_EMAC.html#autotoc_md1402", null ],
      [ "Including the header file", "ICSS_EMAC.html#autotoc_md1403", null ],
      [ "Initializing the Handle", "ICSS_EMAC.html#autotoc_md1404", null ],
      [ "Sending a Packet", "ICSS_EMAC.html#autotoc_md1405", null ],
      [ "Receiving a Packet", "ICSS_EMAC.html#autotoc_md1406", null ],
      [ "IOCTL", "ICSS_EMAC.html#autotoc_md1407", null ]
    ] ],
    [ "Dependencies", "ICSS_EMAC.html#autotoc_md1408", null ],
    [ "Debug Guide", "ICSS_EMAC.html#autotoc_md1409", null ],
    [ "API", "ICSS_EMAC.html#autotoc_md1410", null ],
    [ "Dual EMAC and Switch Firmwares", "ICSS_EMAC.html#autotoc_md1411", null ],
    [ "ICSS-EMAC Design", "ICSS_EMAC_DESIGN.html", [
      [ "Modes of Operation", "ICSS_EMAC_DESIGN.html#autotoc_md1419", null ],
      [ "Ports in ICSS-EMAC Context", "ICSS_EMAC_DESIGN.html#autotoc_md1420", null ],
      [ "Memory Map", "ICSS_EMAC_DESIGN.html#autotoc_md1421", [
        [ "Queue Buffers", "ICSS_EMAC_DESIGN.html#autotoc_md1422", null ],
        [ "Shared Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1423", null ],
        [ "PRU0 Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1424", null ],
        [ "PRU1 Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1425", null ]
      ] ],
      [ "Quality of Service and Queues", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_QOS", null ],
      [ "Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH", [
        [ "Rx Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH_RX", null ],
        [ "Tx Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH_TX", null ],
        [ "Forwarding Rules", "ICSS_EMAC_DESIGN.html#autotoc_md1426", null ]
      ] ],
      [ "OS Components", "ICSS_EMAC_DESIGN.html#autotoc_md1427", [
        [ "Interrupts", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_INTERRUPTS", null ],
        [ "Tasks", "ICSS_EMAC_DESIGN.html#autotoc_md1428", null ],
        [ "Semaphores", "ICSS_EMAC_DESIGN.html#autotoc_md1429", null ]
      ] ],
      [ "Interrupt Pacing", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_INTERRUPT_PACING", null ],
      [ "Half Duplex Support", "ICSS_EMAC_DESIGN.html#autotoc_md1430", null ],
      [ "Learning/FDB", "ICSS_EMAC_DESIGN.html#autotoc_md1431", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1432", null ]
      ] ],
      [ "Storm Prevention", "ICSS_EMAC_DESIGN.html#autotoc_md1433", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1434", null ]
      ] ],
      [ "Statistics", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_STATISTICS", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1435", null ]
      ] ]
    ] ],
    [ "ICSS EMAC Queue Management Design", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html", [
      [ "Overview", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1436", null ],
      [ "Ports in ICSS EMAC", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1437", null ],
      [ "Port-Based Queue Organization", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1438", [
        [ "Queue Distribution", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1439", null ],
        [ "Default Queue Sizes", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1440", null ]
      ] ],
      [ "Introduction to Queue Management Units", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1441", [
        [ "Buffer", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1442", null ],
        [ "Buffer Descriptor (BD)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1443", null ],
        [ "Queue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1444", null ],
        [ "Queue Descriptor (QD)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1445", null ]
      ] ],
      [ "Detailed Component Structure and Relationships", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1446", null ],
      [ "Collision Queue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1447", [
        [ "What is Queue Contention?", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1448", null ],
        [ "Primary-Secondary Arbitration System", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1449", null ],
        [ "How the Arbitration Works", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1450", null ],
        [ "Collision Queue Mechanism", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1451", null ]
      ] ],
      [ "Reception Flow Example", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1452", [
        [ "Initial State (Empty Queues)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1453", null ],
        [ "Packet Arrives at PRU (Firmware Receives)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1454", null ],
        [ "Firmware (Producer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1455", null ],
        [ "Host (Consumer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1456", null ]
      ] ],
      [ "Transmission Flow Example", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1457", [
        [ "Initial State (Empty Transmit Queue)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1458", null ],
        [ "Application Calls ICSS_EMAC_txPacket", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1459", null ],
        [ "Driver (Producer) Actions in ICSS_EMAC_txPacketEnqueue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1460", null ],
        [ "Firmware (Consumer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1461", null ]
      ] ]
    ] ],
    [ "ICSS-EMAC Debug Guide", "ICSS_EMAC_DEBUG_GUIDE.html", [
      [ "Assumption", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1412", null ],
      [ "Scope", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1413", null ],
      [ "Common Debugging Tasks", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1414", [
        [ "Loading and running on CCS", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1415", null ],
        [ "Checking Link Status", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_CHECKING_LINK_STATUS", null ],
        [ "Checking if Receive is working", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1416", null ],
        [ "Checking if Transmit is working", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1417", null ],
        [ "Checking Statistics", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_CHECKING_STATISTICS", null ]
      ] ],
      [ "Accessing Memory", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_ACCESSING_MEMORY", null ],
      [ "Using ROV to Debug RTOS", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1418", null ]
    ] ],
    [ "Dual EMAC and Switch", "DUAL_EMAC_AND_SWITCH.html", [
      [ "Introduction", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1462", null ],
      [ "DUAL_EMAC", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1463", null ],
      [ "SWITCH", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1464", null ]
    ] ]
];