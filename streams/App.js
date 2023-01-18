const http = require("http")
const fs = require("fs")
const server = http.createServer()
// server.on("request",(req,res)=>{
//     fs.readFile("input.txt",(err,data)=>{
//         if (err) return console.log(err)
//         res.end(data.toString())
//     })
// })
// server.on("request",(req,res)=>{
//     const rstream = fs.createReadStream("input.txt")
//     rstream.on("data",(chunk)=>{
//         res.write(chunk)
//     })
//     rstream.on("end",()=>{
//         res.end()
//     })
//     rstream.on("error",(err)=>{
//         console.log(err)
//         res.end("file not found")
//     })
// })
server.on("request",(req,res)=>{
    const rstream = fs.createReadStream("input.txt")
    rstream.pipe(res)
})
server.listen(3000,()=>{
    console.log("listening to port 3000")
})  
