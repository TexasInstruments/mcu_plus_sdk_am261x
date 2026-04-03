var ICSS_EMAC =
[
    [ "Introduction", "ICSS_EMAC.html#autotoc_md1278", null ],
    [ "Features Supported", "ICSS_EMAC.html#autotoc_md1279", null ],
    [ "SysConfig Features", "ICSS_EMAC.html#ICSS_EMAC_SYSCONFIG_FEATURES", null ],
    [ "Features not supported", "ICSS_EMAC.html#autotoc_md1280", null ],
    [ "Terms and Abbreviations", "ICSS_EMAC.html#autotoc_md1281", null ],
    [ "ICSS-EMAC Design", "ICSS_EMAC.html#autotoc_md1282", null ],
    [ "ICSS-EMAC Queue Management Design", "ICSS_EMAC.html#autotoc_md1283", null ],
    [ "Usage", "ICSS_EMAC.html#autotoc_md1284", [
      [ "Enable ICSS-EMAC in SysConfig", "ICSS_EMAC.html#autotoc_md1285", null ],
      [ "Update linker command file", "ICSS_EMAC.html#autotoc_md1286", null ],
      [ "Update MPU for the CPU", "ICSS_EMAC.html#autotoc_md1287", null ],
      [ "Including the header file", "ICSS_EMAC.html#autotoc_md1288", null ],
      [ "Initializing the Handle", "ICSS_EMAC.html#autotoc_md1289", null ],
      [ "Sending a Packet", "ICSS_EMAC.html#autotoc_md1290", null ],
      [ "Receiving a Packet", "ICSS_EMAC.html#autotoc_md1291", null ],
      [ "IOCTL", "ICSS_EMAC.html#autotoc_md1292", null ]
    ] ],
    [ "Dependencies", "ICSS_EMAC.html#autotoc_md1293", null ],
    [ "Debug Guide", "ICSS_EMAC.html#autotoc_md1294", null ],
    [ "API", "ICSS_EMAC.html#autotoc_md1295", null ],
    [ "Dual EMAC and Switch Firmwares", "ICSS_EMAC.html#autotoc_md1296", null ],
    [ "ICSS-EMAC Design", "ICSS_EMAC_DESIGN.html", [
      [ "Modes of Operation", "ICSS_EMAC_DESIGN.html#autotoc_md1304", null ],
      [ "Ports in ICSS-EMAC Context", "ICSS_EMAC_DESIGN.html#autotoc_md1305", null ],
      [ "Memory Map", "ICSS_EMAC_DESIGN.html#autotoc_md1306", [
        [ "Queue Buffers", "ICSS_EMAC_DESIGN.html#autotoc_md1307", null ],
        [ "Shared Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1308", null ],
        [ "PRU0 Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1309", null ],
        [ "PRU1 Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1310", null ]
      ] ],
      [ "Quality of Service and Queues", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_QOS", null ],
      [ "Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH", [
        [ "Rx Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH_RX", null ],
        [ "Tx Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH_TX", null ],
        [ "Forwarding Rules", "ICSS_EMAC_DESIGN.html#autotoc_md1311", null ]
      ] ],
      [ "OS Components", "ICSS_EMAC_DESIGN.html#autotoc_md1312", [
        [ "Interrupts", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_INTERRUPTS", null ],
        [ "Tasks", "ICSS_EMAC_DESIGN.html#autotoc_md1313", null ],
        [ "Semaphores", "ICSS_EMAC_DESIGN.html#autotoc_md1314", null ]
      ] ],
      [ "Interrupt Pacing", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_INTERRUPT_PACING", null ],
      [ "Half Duplex Support", "ICSS_EMAC_DESIGN.html#autotoc_md1315", null ],
      [ "Learning/FDB", "ICSS_EMAC_DESIGN.html#autotoc_md1316", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1317", null ]
      ] ],
      [ "Storm Prevention", "ICSS_EMAC_DESIGN.html#autotoc_md1318", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1319", null ]
      ] ],
      [ "Statistics", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_STATISTICS", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1320", null ]
      ] ]
    ] ],
    [ "ICSS EMAC Queue Management Design", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html", [
      [ "Overview", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1321", null ],
      [ "Ports in ICSS EMAC", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1322", null ],
      [ "Port-Based Queue Organization", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1323", [
        [ "Queue Distribution", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1324", null ],
        [ "Default Queue Sizes", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1325", null ]
      ] ],
      [ "Introduction to Queue Management Units", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1326", [
        [ "Buffer", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1327", null ],
        [ "Buffer Descriptor (BD)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1328", null ],
        [ "Queue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1329", null ],
        [ "Queue Descriptor (QD)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1330", null ]
      ] ],
      [ "Detailed Component Structure and Relationships", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1331", null ],
      [ "Collision Queue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1332", [
        [ "What is Queue Contention?", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1333", null ],
        [ "Primary-Secondary Arbitration System", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1334", null ],
        [ "How the Arbitration Works", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1335", null ],
        [ "Collision Queue Mechanism", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1336", null ]
      ] ],
      [ "Reception Flow Example", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1337", [
        [ "Initial State (Empty Queues)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1338", null ],
        [ "Packet Arrives at PRU (Firmware Receives)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1339", null ],
        [ "Firmware (Producer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1340", null ],
        [ "Host (Consumer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1341", null ]
      ] ],
      [ "Transmission Flow Example", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1342", [
        [ "Initial State (Empty Transmit Queue)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1343", null ],
        [ "Application Calls ICSS_EMAC_txPacket", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1344", null ],
        [ "Driver (Producer) Actions in ICSS_EMAC_txPacketEnqueue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1345", null ],
        [ "Firmware (Consumer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1346", null ]
      ] ]
    ] ],
    [ "ICSS-EMAC Debug Guide", "ICSS_EMAC_DEBUG_GUIDE.html", [
      [ "Assumption", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1297", null ],
      [ "Scope", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1298", null ],
      [ "Common Debugging Tasks", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1299", [
        [ "Loading and running on CCS", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1300", null ],
        [ "Checking Link Status", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_CHECKING_LINK_STATUS", null ],
        [ "Checking if Receive is working", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1301", null ],
        [ "Checking if Transmit is working", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1302", null ],
        [ "Checking Statistics", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_CHECKING_STATISTICS", null ]
      ] ],
      [ "Accessing Memory", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_ACCESSING_MEMORY", null ],
      [ "Using ROV to Debug RTOS", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1303", null ]
    ] ],
    [ "Dual EMAC and Switch", "DUAL_EMAC_AND_SWITCH.html", [
      [ "Introduction", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1347", null ],
      [ "DUAL_EMAC", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1348", null ],
      [ "SWITCH", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1349", null ]
    ] ]
];