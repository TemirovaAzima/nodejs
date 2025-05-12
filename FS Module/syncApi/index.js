import * as fs from 'fs'

// fs.readFileSync('c:\\nodejs\\home\\image.text','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// }) this is incorrect because it is not asynchronous to have a callback function

const data = fs.readFileSync('c:\\nodejs\\home\\image.text','utf8');
console.log(data)