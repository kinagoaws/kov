import{bo as f,A as g}from"./index.c29f7992.js";const C={async Enabled(){return await new Promise(function(i,t){bluetoothle.isInitialized(function(o){o.isInitialized==!0?bluetoothle.isEnabled(function(n){console.log(JSON.stringify(n)),n.isEnabled==!0?i(!0):bluetoothle.enable(function(e){console.log(JSON.stringify(e)),i(!0)},function(e){t(e)})}):bluetoothle.initialize(function(n){n.status=="enabled"?i(!0):bluetoothle.enable(function(e){console.log(JSON.stringify(e)),i(!0)},function(e){t(e)})},{request:!0,statusReceiver:!1,restoreKey:"bluetoothleplugin"})}),f.addListener("networkStatusChange",o=>{o.connected==!0&&i(!0)})})},async CheckLocation(){return await new Promise(function(i,t){bluetoothle.hasPermission(function(o){console.log(JSON.stringify(o)),o.hasPermission==!0?i(!0):bluetoothle.requestPermission(function(n){console.log(JSON.stringify(n)),n.requestPermission==!0?(console.log("successful"),i(!0)):t("Failed to enabled location")},function(n){console.log(JSON.stringify(n)),t(error)})})})},async CheckLocationOnly(){return await new Promise(function(i,t){bluetoothle.hasPermission(function(o){console.log(JSON.stringify(o)),o.hasPermission==!0?i(!0):t(!1)})})},async checkLocationEnabled(){return await new Promise(function(i,t){bluetoothle.isLocationEnabled(function(o){console.log(JSON.stringify(o)),o.isLocationEnabled==!0?i(!0):bluetoothle.requestLocation(function(n){n.requestLocation==!0?i(!0):t(!1)},function(n){console.log(JSON.stringify(eror)),t(n)})})})},async CheckBTScanPermission(){return await new Promise(function(i,t){bluetoothle.hasPermissionBtScan(function(o){console.log(JSON.stringify(o)),o.hasPermission==!0?i(!0):bluetoothle.requestPermissionBtScan(function(n){console.log(JSON.stringify(n)),n.requestPermission==!0?(console.log("successful"),i(!0)):t("Failed location")},function(n){console.log(JSON.stringify(n)),t(error)})})})},async CheckPeripheral(){return await new Promise(function(i,t){bluetoothle.initializePeripheral(function(o){console.log(JSON.stringify(o)),o.status=="enabled"&&i(!0)},function(o){console.log(JSON.stringify(o)),t(o)},{request:!0,restoreKey:"bluetoothleplugin"})})},async CheckBTConnectPermission(){return await new Promise(function(i,t){bluetoothle.hasPermissionBtConnect(function(o){console.log(JSON.stringify(o)),o.hasPermission==!0?i(!0):bluetoothle.requestPermissionBtConnect(function(n){console.log(JSON.stringify(n)),n.requestPermission==!0?(console.log("successful"),i(!0)):t("Failed location")},function(n){console.log(JSON.stringify(n)),t(error)})})})},async CheckBTConnectPermissionOnly(){return await new Promise(function(i,t){bluetoothle.hasPermissionBtConnect(function(o){console.log(JSON.stringify(o)),o.hasPermission==!0?i(!0):t(!1)})})},async Scan(){let l=[];return await new Promise(function(t,o){console.log("STAR SCAN");let n={services:[],allowDuplicates:!1,scanMode:bluetoothle.SCAN_MODE_LOW_LATENCY,matchMode:bluetoothle.MATCH_MODE_AGGRESSIVE,matchNum:bluetoothle.MATCH_NUM_MAX_ADVERTISEMENT,callbackType:bluetoothle.CALLBACK_TYPE_ALL_MATCHES};bluetoothle.startScan(function(e){e.status==="scanStarted"||e.status==="scanResult"&&typeof e.name!="undefined"&&e.name!==null&&(l.some(function(s){return s.address===e.address})||l.push(e))},function(e){console.log(JSON.stringify(e))},n),setTimeout(()=>{bluetoothle.stopScan(function(e){e.status=="scanStopped"&&t(l)},function(e){t(!0)})},1e4)})},async StopScan(){return await new Promise(function(i,t){bluetoothle.stopScan(function(o){o.status=="scanStopped"&&i(o)},function(o){t(o)})})},async retrieveDevice(){return await new Promise(function(i,t){bluetoothle.retrieveConnected(function(o){i(o)},function(o){t(o)})})},async Bond(l){return await new Promise(function(t,o){bluetoothle.bond(function(n){t(n)},function(n){console.log("BOND ERROR==>"),console.log(JSON.stringify(n)),n.message=="Device already bonded"?t(!0):o(n.message)},{address:l})})},async Connect(l,i){return await new Promise(function(o,n){console.log("CONNECTING..==>"),i=="sunmi"?ble.isConnected(l,e=>{console.log("CONNECTED SUCCESFUL ==>"),console.log(JSON.stringify(e)),ble.disconnect(l,s=>{console.log("DISCONNECT SUCCESFUL ==>"),console.log(JSON.stringify(s)),setTimeout(()=>{ble.connect(l,function(c){console.log("CONNECT SUCCESS==>"),console.log(JSON.stringify(c)),o(!0)},function(c){console.log("CONNECT 1 ERROR==>"),console.log(JSON.stringify(c)),o(!0)})},1)},s=>{console.log("DISCONNECT 2 ERROR ==>"),console.log(JSON.stringify(s)),n(s.errorMessage)})},e=>{console.log("CONNECTED ERROR ==>"),console.log(JSON.stringify(e)),ble.connect(l,function(s){console.log("CONNECT SUCCESS==>"),console.log(JSON.stringify(s)),o(!0)},function(s){console.log("CONNECT 3 ERROR==>"),console.log(JSON.stringify(s)),o(!0)})}):ble.isConnected(l,function(e){console.log("isConnected SUCCESS==>"),console.log(JSON.stringify(e)),o(!0)},function(e){console.log("isConnected ERROR==>"),ble.connect(l,function(s){console.log("CONNECT SUCCESS==>"),console.log(JSON.stringify(s)),o(!0)},function(s){console.log("CONNECT 1 ERROR==>"),console.log(JSON.stringify(s)),n(s.errorMessage)})})})},async Print(l,i,t,o,n){let e="",s="";g.empty(o)?(e=t=="bluetooth"?"18f0":"1101",s=t=="bluetooth"?"2af1":"1101"):(e=o,s=n),bluetoothle.stringToBytes(i);var c=bluetoothle.encodeUnicode(i);return await new Promise(function(a,r){console.log("INIT PRINTING..==>"),ble.write(l,e,s,c,function(u){console.log("PRINT SUCCESS==>"),console.log(JSON.stringify(u)),a(!0)},function(u){console.log("PRINT ERROR==>"),console.log(JSON.stringify(u)),t=="bluetooth"?r(u.errorMessage):(console.log("SUNMI ERROR==>"),a(!0))})})},async GetServices(l){return await new Promise(function(t,o){ble.isConnected(l,function(n){console.log("IS CONNECTED==>"),console.log(JSON.stringify(n)),ble.disconnect(l,e=>{console.log("DISCONNECT SUCCESFUL==>"),console.log(JSON.stringify(e)),setTimeout(()=>{ble.connect(l,function(s){console.log("CONNECT 1 SUCCESS==>"),console.log(JSON.stringify(s)),t(s)},function(s){console.log("CONNECT 1  ERROR==>"),console.log(JSON.stringify(s)),o(s)})},1)},e=>{o(e)})},function(n){console.log("GET SERVICES ERROR==>"),console.log(JSON.stringify(n)),setTimeout(()=>{ble.connect(l,function(e){console.log("CONNECT SUCCESS==>"),console.log(JSON.stringify(e)),t(e)},function(e){console.log("CONNECT  ERROR==>"),console.log(JSON.stringify(e)),o(e.errorMessage)})},1)})})},async Disconnect(l){return await new Promise(function(t,o){ble.disconnect(l,n=>{console.log("DISCONNECT SUCCESSFUL==>")},n=>{console.log("DISCONNECT failed==>")})})}};export{C as A};
