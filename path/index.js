const path = require("path")
// console.log(path)
const dirname = path.dirname("C:/Users/LEGION/Desktop/Batches/Hafflepuff/path/index.js")
console.log(dirname)
console.log(path.extname("index.js"))
console.log(path.basename("C:/Users/LEGION/Desktop/Batches/Hafflepuff/path/index.js"))
//path.parse(path) => returns an object whose properties represent significat 
//elements of the path
// dir
//root
//base
//name
//ext
//console.log(path.parse("C:/Users/Batches/Hafflepuff/path/index.js"))

const paa = path.format({
    root : "/ignored",
    dir : "/adfar/navi/public",
    base:"path.js"
})
console.log(paa)
console.log(path.format({
    root : "/adfar",
    base : "/file.txt",
    ext:"ignored",
    name:"ignored"
}))
