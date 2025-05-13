import os from "os";

console.log(os.platform()) // shows ur platform win32
console.log(os.arch()) // x64 and x86is for the older computers
// console.log(os.cpus()) // info about cpu
console.log(os.hostname()) // ur computer name
// console.log(os.networkInterfaces())
console.log(os.freemem())
console.log(os.totalmem())
let freeMemoryBytes = os.freemem();
let freeMemoryGB = freeMemoryBytes / (1024 ** 3)

console.log(freeMemoryGB.toFixed(2) + "GB");