import {EventEmitter} from 'node:events';

// class is always in PascalCase because it will indicate that is not a function or a simple variable

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0
myEmitter.on('event', () => {
    console.log(m++)
})

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')