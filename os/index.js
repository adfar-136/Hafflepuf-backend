var os = require('os')
// console.log(os)
console.log("CPU architecture :"+ os.arch())
console.log("Free memory :" + os.freemem())
const mem = (os.freemem())/(1024*1024*1024)
console.log(mem)
const totalmem = (os.totalmem())/(1024*1024*1024)
console.log(totalmem)
console.log("hostname :" +os.hostname())
console.log("operation name: "+ os.type())
console.log("operating system platform : " + os.platform())
console.log("operating system release :" + os.release())