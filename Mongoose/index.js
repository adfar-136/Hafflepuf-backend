const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/newtonn").then(()=>{
    console.log("connected to my mongodb server")
}).catch((err)=>{
    console.log(err);
})

const student = new mongoose.Schema({
    name:String,
    height:Number,
    workout:Boolean
})
const Students = new mongoose.model("Students",student)