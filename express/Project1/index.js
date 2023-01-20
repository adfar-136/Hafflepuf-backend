const { application } = require("express")
var express =require("express")
var app = express()
app.use(express.json())
const students = require("./students")
app.get("/",(req,res)=>{
   res.json({message:"Api is working"})
})
app.get("/api/students",(req,res)=>{
    res.json(students)
})
app.post("/api/students",(req,res)=>{
    if(!req.body.email){
        res.status(404)
        return res.json({error : "email is required"})
    }
    const user = {
        id : students.length + 1,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
    }
    students.push(user)
    console.log(students)
    res.json(user)
})
app.put("/api/students/:id",(req,res)=>{
    let id = req.params.id
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let index = students.findIndex((student)=>{
        return (student.id === Number.parseInt(id))
    })
    if(index>=0){
        let std = students[index]
        std.first_name =first_name
        std.last_name = last_name
        std.email = email
        res.json(std)
    }
    else {
        res.status(404)
    }
    
})















app.listen(5000,()=>{
    console.log("listening to port 3000")
})





