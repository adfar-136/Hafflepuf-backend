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

const adder = async()=>{
//   const hf = new Students({
//     name:"Roop",
//     height: 5.5,
//     workout:false
//   })
//  await hf.save()
// const hf = await Students.create({
//     name:"Roop",
//     height: 4,
//     workout:false
//   })
//  console.log(hf)
// const hf = await Students.find({height:{$eq:6}})
// const hf = await Students.find({height:{$gt:6}})
const hf = await Students.find({height:{$te:6}})

console.log(hf)
}
adder()






