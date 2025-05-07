import * as fs from "fs/promises"
// const fs  = require('node:fs').promises

try{
    await fs.unlink('c:\\nodejs\\text\\text.txt')
    console.log("nodejs file deleted")
}catch(err){
    console.log(err)
}