var express = require("express")
var app = express()

app.set("view engine","hbs")
app.get("/",(req,res)=>{
    res.render("index",{
        name : "Adfar"
    })
})
var data = {
    name : "Adfar",
    age : 25
}
app.get("/adfar",(req,res)=>{
    res.render("adfar",{data:data})
})
var skills = {
    name :"Roop",
    skills : ["HTML","CSS","JS","React","Nodejs"]
}
app.get("/roop",(req,res)=>{
    res.render("roop",{skills:skills})
})

app.listen(5000,()=>{
    console.log("listening to 5000 port")
})