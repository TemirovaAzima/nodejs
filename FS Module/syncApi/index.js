import * as fs from 'fs/promises'
// import * as path from "node:path";

// fs.readFileSync('c:\\nodejs\\home\\image.text','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// }) this is incorrect because it is not asynchronous to have a callback function

// const data = fs.readFileSync('c:\\nodejs\\home\\image.text','utf8');
// console.log(data)

// Callback version
// fs.readdir('c:\\nodejs\\home',(err,files)=>{
//     if(err) return console.error(err);
//     files.forEach(file=>{
//         const filePath = path.join('c:\\nodejs\\home',file)
//         fs.readFile(filePath,(err,data)=>{
//             if(err) return console.error(err);
//             console.log(`file ${file} data ${data}`)
//         })
//     })
// })

// Async/await version
// try{
//     const files = await fs.readdir('c:\\nodejs\\home')
//     for (const file of files){
//         const filePath = path.join('c:\\nodejs\\home',file)
//         const data = await fs.readFile(filePath, 'utf8');
//         console.log(data)
//     }
// }catch(err){
//     console.error('Something went wrong',err)
// }

// Reading only real files
//
// async function readFilesInFolder(folderPath){
//     try{
//         const items = await fs.readdir(folderPath);
//
//         for(const item of items){
//             const fullPath = path.join(folderPath,item);
//             const stat = await fs.stat(fullPath);
//
//             if(stat.isFile()){
//                 const data = await fs.readFile(fullPath,'utf8')
//                 console.log(`Contents of ${item}:`)
//                 console.log(data)
//             }
//         }
//     }catch(err){
//         console.error('Error:',err)
//     }
// }
//
// console.log(readFilesInFolder('c:\\nodejs\\home'))
// const buffer = await fs.readFile('c:\\nodejs\\home\\bigData.txt');
// console.log(buffer);
//
// const text = await fs.readFile('c:\\nodejs\\home\\bigData.txt','utf8');
// console.log(text);

// fs.writeFile('c:\\nodejs\\home\\bigData.txt','hello newData ,this hurts so bad when u dont know what to do ,seeing dads cry makes ur heart feel so different u dont what to express , but i know this is all gods plan , dont cry dad ill make ur happy just give me some time but please dont cry we will have a beautiful life even though everything is so hard right now it doesnt mean we have to leave each other ,please dont leave me , u say u love me but even though when u are crying i could not even say it back but in my deep my heart i love u so much , i cant stop crying it feels everybody in our family cant get along with each other even my mom i dont  understand my mom why she acts like that but i hope everything will be okay . ill promise i will make us rich so we wont have problem with money' ,{encoding:'utf8',flag:'w'},(err)=>{
//     if(err) throw err
// });
// async function saveUserInput(name) {
//     await fs.writeFile('c:\\nodejs\\home\\newLife.txt', `${name} new Life as he said he wants to start dont expect anything from me , should we just die so the problem we are having will disappear he told me that im sure u will achieve ur goals when he hugged and told me that i wll achieve all my goals but i even dare to hug him back . the last blow kiss he did felt different being desperate and no one helped u it feels like the life what is a life it is difficult to survive `,'utf8')
//     console.log('it hurts')
// }
//
// console.log(saveUserInput('Love'))
// Callback version
// fs.writeFile('c:\\nodejs\\home\\file.text','okay doesnt matter everything is a experience','utf8',(err)=>{
//     if(err){
//         console.log('Error writing file:',err)
//     }else{
//         console.log('File written successfully!')
//     }
// })
// Promises
async function writeToFile(){
    try{
        await fs.writeFile('c:\\nodejs\\home\\newLifeAsSaid','Hello New life','utf8');
        console.log('File written successfully:')
    }catch(err){
        console.error('Error writing file:',err)
    }
}

console.log(writeToFile())
