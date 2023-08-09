// SOS - sta built-in modules DEN BAZW "./ klp"
const { log } = require('console')
const os = require('os')
// os.(access options)
// const {destructuring to os} = req....

// info about current user
const user = os.userInfo()
// console.log(user)

// method returns the system uptime in seconds
// console.log(`The System uptime is: ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)