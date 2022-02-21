var fs=require("fs");
var de=fs.unlinkSync("neha.tex")


const num={"monika":12,"pooja":11}
fs=require("fs")
fs.writeFileSync("monika.json",JSON.stringify(num,null,5))

fs.appendFileSync("monika.json","parjapat")
