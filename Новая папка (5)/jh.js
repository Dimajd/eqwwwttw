i = 1
while (i <= 150)
{
    console.log(i+ "Hello world!");
    i++
}


// №2
bb = 1;
while (bb <= 20)
{
    if (bb%2 == 0)
    {
        console.log(bb)
    }
    bb++
}


// №3
function ali (x){
  if(x>0)
  {
    console.log("Hello")
  }  else
  {
    console.log("olleH")
  }
}
ali(-1)

// №4
const fs = require('fs')
function funct1(a,b){
  let i =a*b
  let text = fs.readFileSync('text1.txt','utf8') 
  fs.writeFileSync('text1.txt',text+"Pobeda"+i)
}

funct1(15,2)