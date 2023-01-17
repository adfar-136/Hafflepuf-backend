var http = require("http")
var fs = require("fs")
// http.createServer((request,response)=>{
//     response.write("Hello world ")
//     response.end(" Adfar Rasheed")
// }).listen(3000,()=>{
//     console.log("listening to port 3000")
// })
const server = http.createServer((req,res)=>{
    const data = fs.readFileSync("./sample/userapi.json","utf-8")
    const objData = JSON.parse(data)
    if(req.url==="/"){
        res.end("Hello from the home page")
    } else if(req.url === "/about"){
        res.end("Hello from about page")
    } else if(req.url === "/contact"){
        res.end("Hello from contact page")
    } else if (req.url ==="/userapi"){
        res.end(objData[2].name)
    } else {
        res.end("Error 404 page")
    }
})
server.listen(8000,()=>{
    console.log("listening to 8000 port")
})