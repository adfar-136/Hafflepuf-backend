var EventEmitter = require("events")
var eventEmiiter = new EventEmitter()

var fun1 = (msg)=>{
    console.log("message from fun1 : " + msg)
}

var fun2 =(msg)=>{
    console.log("message from fun2 : " + msg)
}
eventEmiiter.on('myEvent',fun1)
eventEmiiter.on('myEvent',fun2)
eventEmiiter.on('myEvent',fun2)
// eventEmiiter.removeAllListeners("myEvent",fun2)
// eventEmiiter.removeListener("myEvent",fun2)

eventEmiiter.emit("myEvent","Event Occured")
eventEmiiter.prependListener("myEvent",fun2)
console.log(eventEmiiter.listeners("myEvent"))
console.log(eventEmiiter.listenerCount("myEvent"))
// eventEmiiter.on('myEvent',(msg)=>{
//     console.log(msg)
// })
// eventEmiiter.emit("myEvent","First event")
