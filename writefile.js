var fs = require('fs');
fs.writeFileSync("monika.tex","i am monika")


var fs=require("fs")
fs.writeFileSync("pooja.tex","i am monika")


var fs=require('fs')
fs.appendFileSync("pooja.tex","monika")


var fs=require('fs')
var a=fs.readFileSync("pooja.tex","utf8")
console.log(a)


var fs=require('fs')
fs.renameSync("pooja.tex","rani.tex")


var fs=require('fs')
var d=fs.unlinkSync("monika.tex")




