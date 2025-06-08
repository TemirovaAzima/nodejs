import {EventEmitter} from 'events';

class MyEventEmitter extends EventEmitter {}
const myEmitter = new MyEventEmitter();

// error is built name type so make sure u don't misspell it

myEmitter.on('error',(err)=>{
    console.error(err,'there was an error')
});
myEmitter.emit('error',new Error("whoops!"));
// u are managing error if u dont nodejs crashes