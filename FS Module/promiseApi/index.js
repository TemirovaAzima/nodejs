import * as fs from "fs/promises"
// const fs  = require('node:fs').promises

try{
    await fs.mkdir('c:\\nodejs\\text')
    console.log("nodejs folder created")
}catch(err){
    console.log(err)
}