import * as fs from 'fs/promises'
import * as path from "node:path";

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

async function readFilesInFolder(folderPath){
    try{
        const items = await fs.readdir(folderPath);

        for(const item of items){
            const fullPath = path.join(folderPath,item);
            const stat = await fs.stat(fullPath);

            if(stat.isFile()){
                const data = await fs.readFile(fullPath,'utf8')
                console.log(`Contents of ${item}:`)
                console.log(data)
            }
        }
    }catch(err){
        console.error('Error:',err)
    }
}

console.log(readFilesInFolder('c:\\nodejs\\home'))