import fs from 'fs';

// Examples of Creating/ Adding / Managing Data with Streams
// reading
const reader = fs.createReadStream('c:\\nodejs\\text\\text.text');
reader.on('data',(chunk)=>{
    console.log('Read:',chunk);
});


// writing
const writer = fs.createWriteStream('c:\\nodejs\\text\\text.text');
writer.write('This is a new line\n');
writer.end();
console.log(writer)

// piping(managing)
const reading = fs.createReadStream('c:\\nodejs\\text\\text.text');
const writing = fs.createWriteStream('c:\\nodejs\\text\\newText.text');
reading.pipe(writing) // read and write in one flow
console.log(writing)