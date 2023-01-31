const express = require("express")
const app = express()
app.use(express.json())
const {connectMongoose,User} =require("./database")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const ejs = require("ejs")
connectMongoose()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/register",async(req,res)=>{
    const user =await User.findOne({username:req.body.username})
    if(user) return res.status(400).send("User already exists");
    const newUser =await User.create(req.body)
    res.status(201).send(newUser)
})
app.listen(4000,()=>{
    console.log("listening to 4000 port")
})