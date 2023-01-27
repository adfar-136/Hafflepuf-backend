const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/jwt").then(()=>{
    console.log("Connected to mongodb")
})
const userSchema = mongoose.Schema({
    username:String,
    password:String
})
const userModel = mongoose.model('User',userSchema)

module.exports = userModel