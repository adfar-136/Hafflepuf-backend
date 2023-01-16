var fs = require("fs")

// //fs.writeFile("adfar.txt","Adfar rasheed mera naam hain",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File created successfully")
//     }
// })
// fs.appendFile('adfar.txt'," Believe in yourself",(err)=>{
//     console.log("task completed")
// })

fs.readFile("adfar.txt","utf-8",(err,data)=>{
    console.log(data)
})
