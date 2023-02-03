const express = require("express")
const passport =require("passport")
const expressSession = require("express-session")
const app = express()
app.use(express.json())
const {connectMongoose,User} =require("./database")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const ejs = require("ejs")
const { initializingPassport, isAuthenticated } = require("./passportConfig")
connectMongoose()
initializingPassport(passport)
app.use(expressSession({secret:"secret",resave:false}))
app.use(passport.initialize())
app.use(passport.session())

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/login",
passport.authenticate("local",
{successRedirect:"/profile",failureRedirect:"/register"}))
app.get("/profile",isAuthenticated,(req,res)=>{
    res.send(req.user)
})
app.get("/logout",(req,res)=>{
    req.logOut(()=>{
        
    })
    res.send("logged Out successfully")
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

app.listen(8000,()=>{
    console.log("listening to 4000 port")
})