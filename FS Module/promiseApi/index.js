import * as fs from "fs/promises"
// import * as constants from "node:constants";
// import * as constants from "node:constants";
// const fs  = require('node:fs').promises
// try{
//     await fs.writeFile("c:\\nodejs\\home\\text.txt",'hello man',"utf-8")
//     console.log('nodejs file created')
// }catch(err){
//     console.log(err)
// }
// recursive true is good for deleting everything like subfolders , nested files if u dont use it u will get
// error like the dir is not empty
// force true when u try to delete like it twice the second it will give an error like there is no such file exist
// so to ignore that u have force true
// todo delete the non-empty folder on command prompt u can use rmdir /s /q home


// try{
//     const files = await fs.readdir('c:\\Users\\azima\\OneDrive',"utf-8");
//     for(const file of files){
//         console.log(file)
//     }
//     console.log(files)
// }catch(err){
//     console.log(err)
// }
// try{
//     await fs.writeFile('c:\\nodejs\\hello.text','hello world','utf8');
//     console.log('file created')
// }catch(err){
//     console.log(err)
// }
// try{
//     await fs.appendFile('c:\\nodejs\\hello.text', 'hello guyssss','utf8')
//     console.log('extra data added')
// }catch(err){
//     console.log(err)
// }
// try{
//      const stats = await fs.stat("c:\\nodejs\\text\\hello.text")
//     console.log(stats)
// }catch(err){
//     console.log(err)
// }
// try{
//     await fs.copyFile('c:\\nodejs\\bigData.txt', 'c:\\nodejs\\text\\bigData.txt')
//     console.log('file copied')
// }catch(err){
//       console.log(err)
// }
// try{
//     await fs.writeFile("c:\\nodejs\\bigData.txt",'hey new file is creating','utf8')
//     console.log('file created')
// }catch(err){
//     console.log(err)
// }
// try {
//    const data = await fs.stat('c:\\nodejs\\text\\bigData.txt')
//     console.log(data)
// }catch(err){
//     console.log(err)
// }
try{
    const stats = await fs.stat('c:\\nodejs\\BigData.txt')
    console.log(stats)
    console.log(stats.isFile())
    console.log(stats.isDirectory())
}catch(err){
    console.log(err)
}