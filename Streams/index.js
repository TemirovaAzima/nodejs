import fs from 'fs';

// For small data, doing this is faster and easier.
const content = fs.readFileSync('c:\\nodejs\\text\\text.text','utf8');

console.log(content.toString());
// But for big files(like 1GB+), that could crash your server. That's where streams are much safer
const stream = fs.createReadStream('c:\\nodejs\\text\\text.text','utf8');

stream.on('data',(chunk)=>{
    console.log('Received chunk',chunk.toString());
});

stream.on('end',()=>{
    console.log('Finished reading');
});
