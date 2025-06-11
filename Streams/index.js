import fs from 'fs';

const rs = fs.createReadStream('c:\\nodejs\\text\\text.text');
rs.on('open',function(){
    console.log('This file is open')
})