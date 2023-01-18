var express = require("express")

var app = express()
app.get("/",(req,res)=>{
    res.send(("Welcome to express"))
})
app.get("/about",(req,res)=>{
    res.send("Welcome to my About Page")
})
app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page")
})
app.get("/adfar",(req,res)=>{
    res.write("<h1>Adfar Rasheed is here</h1>")
    res.write("<h1>Adfar Rasheed is here</h1>")
    res.write("<h1>Adfar Rasheed is here</h1>")
    res.write("<h1>Adfar Rasheed is here</h1>")
    res.write("<h1>Adfar Rasheed is here</h1>")
    res.write("<h1>Adfar Rasheed is here</h1>")
    res.send()
})
app.listen(3000,()=>{
    console.log("listening to 3000 port")
})