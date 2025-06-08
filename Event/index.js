import {EventEmitter} from 'events';
class MyEventEmitter extends EventEmitter {}

const myEmitter = new MyEventEmitter();

myEmitter.emit('error',new Error("whoops!"));
// throws and crashes Nodejs