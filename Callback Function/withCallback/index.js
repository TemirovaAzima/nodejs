let fs = require('fs');
console.log('start')

fs.readFile('c:\\nodejs\\text\\text.txt','utf8',(err,data)=>{
    err? console.log(err): console.log(data.toString())
})

console.log('Program Ended')