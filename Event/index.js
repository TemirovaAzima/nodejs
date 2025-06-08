import {EventEmitter, errorMonitor} from 'events';
import * as util from "node:util";

class MyEventEmitter extends EventEmitter {}
const myEmitter = new MyEventEmitter();
// errorMonitor just observes and doesn't prevent crashing

myEmitter.on(errorMonitor,(err)=>{
    console.log(util.inspect(err),'there was an error')
});
myEmitter.on('error',(err)=>{
    console.log(err,'hello')
})
myEmitter.emit('error',new Error("whoops!"));
console.log('end')
//