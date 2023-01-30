const { hashSync, compareSync } = require('bcrypt')
const express = require('express')
const userModel = require('./database')
const app = express()
const jwt = require("jsonwebtoken")
const UserModel = require('./database')
const passport = require('passport')
require("./passport")
app.use(passport.initialize())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post("/register",(req,res)=>{
    const user = new UserModel({
        username: req.body.username,
        password: hashSync(req.body.password,15)
    })
    user.save().then(user=>{
        res.send({
            success : true,
            message: "user Created successfully",
            user : {
                id: user.id,
                username : user.username
            }

        })
    }).catch(err=>{
        res.send({
            success: false,
            message:"something went wrong",
            error:err
        })
    })
})
app.post("/login",(req,res)=>{
    userModel.findOne({username:req.body.username}).then(user=>{
        if(!user){
        return res.status(401).send({
            success : false,
            message : "could not find the user"
            
        })
      }
      if(!compareSync(req.body.password,user.password)){
        return res.status(401).send({
            success :false,
            message: "Incorrect Password"
        })
      }
      const payload ={
        username: user.username,
        id:user.id
      }
    const token = jwt.sign(payload,"Random string",{expiresIn:"1d"})
    return res.status(200).send({
        success : true,
        message : "logged in successfully",
        token :"Bearer " + token
    })
    })

})
app.get("/profile",passport.authenticate("jwt",{session:false}),
(req,res)=>{
    
    return res.status(200).send({
        success : true,
        
    })
})
app.listen(5000,()=>{
    console.log("listening to port 500 successfully")
})
