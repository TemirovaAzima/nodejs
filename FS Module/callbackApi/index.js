import * as fs from 'fs';

// fs.mkdir('c:\\nodejs\\home',(err)=>{
//     if(err) throw err
//     console.log('node js folder created')
// })

// fs.writeFile('c:\\nodejs\\home\\image.text', 'it is a picture','utf8',(err)=>{
//     if(err) throw err;
//     console.log('Successfully written');
// })
// fs.readFile('c:\\nodejs\\home\\image.text','utf8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
fs.writeFile('c:\\nodejs\\home\\image.text','using flag property',{encoding:'utf8',flag:'a'}, (err)=>{
   if(err) throw err
    console.log('Used flag property')
})