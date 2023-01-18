var fs = require("fs")
// let data =''
// let readstream = fs.createReadStream("adrfar.txt")
// readstream.on("data",function(chunk){
//     data+=chunk
//     console.log(data)
// })
// readstream.on("end",function(){
//     console.log(data)
// })
let readstream = fs.createReadStream("input.txt")
let writestream = fs.createWriteStream("output.txt")
readstream.pipe(writestream)
readstream.pipe(writestream)