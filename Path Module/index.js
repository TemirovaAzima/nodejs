import path from 'path';
// const path = require('path');
// const path = require('node:path');

console.log(path.basename("c:/Users/azima/app.js"));
console.log(path.dirname("c:/Users/azima/app.js"));
console.log(path.extname("c:/Users/azima/app.js"));
console.log(path.join('c:','Users','azima','/app.js'));
console.log(path.join('c:','Users','azima','/app.js','..'));
console.log(path.normalize('c:///Users////azima//feature///videos///app.js'));
console.log(path.parse('c:/Users/azima/feature/videos/app.js'));
console.log(path.parse('c:/Users/azima/feature/videos/app.js').dir);
console.log(path.parse('c:/Users/azima/feature/videos/app.js').ext);
console.log(path.parse('c:/Users/azima/feature/videos/app.js').name);
console.log(path.parse('c:/Users/azima/feature/videos/app.js').base);
console.log(path.parse('c:/Users/azima/feature/videos/app.js').root);
console.log(path.parse('c:/Users/azima/rasm.jpg').ext);