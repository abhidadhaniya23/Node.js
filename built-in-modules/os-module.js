const os = require('os')
console.log(`Your device version : ${os.version()}`)
// console.log(os.hostname())
// console.log(os.networkInterfaces())
const currentOs={
    name: os.type(),
    bit: os.arch(),
    release: os.release(),
    totalMemory: os.totalmem()/1000000, // gives in mb
    freeMemory: os.freemem()/1000000,
}
console.log(currentOs);

// info about current user...
const user = os.userInfo()
// console.log(user)
console.log(`hello ${user.username} !!`)

// method returns the system uptime in seconds
console.log(`Your system uptime is ${os.uptime} seconds.`)
console.log(`Your system uptime is ${(os.uptime/3600).toFixed(2)} hours OR ${(os.uptime/60).toFixed(2)} minutes.`)