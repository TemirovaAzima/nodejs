import * as fs from "fs/promises"
// const fs  = require('node:fs').promises
try{
    await fs.rm("c:\\nodejs\\home",{recursive:true,force:true})
    console.log('nodejs folder deleted ')
}catch(err){
    console.log(err)
}
// recursive true is good for deleting everything like subfolders , nested files if u dont use it u will get
// error like the dir is not empty
// force true when u try to delete like it twice the second it will give an error like there is no such file exist
// so to ignore that u have force true