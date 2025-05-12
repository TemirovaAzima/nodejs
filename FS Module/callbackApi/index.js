import * as fs from 'fs';

fs.mkdir('c:\\nodejs\\home',(err)=>{
    if(err) throw err
    console.log('node js folder created')
})