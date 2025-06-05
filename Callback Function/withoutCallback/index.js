let fs = require('fs');
console.log('start');

let data = fs.readFileSync('c:\\nodejs\\text\\text.text','utf8')

console.log(data.toString())
console.log("Ended")