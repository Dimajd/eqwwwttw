
// №4
const fs = require('fs')
function funct1(a,b){
  let i =a*b
  let text = fs.readFileSync('text1.txt','utf8') 
  fs.writeFileSync('text1.txt',text+"Pobeda"+i)
}

funct1(15,2)