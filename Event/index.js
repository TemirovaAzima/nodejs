import {EventEmitter} from 'node:events';

class MyEmitter extends EventEmitter {
}

console.log(EventEmitter)
const myEmitter = new MyEmitter()

myEmitter.on('event', () => {
    console.log('Not asynchronous')
})
myEmitter.on('event', (a, b) => {
    setImmediate(() => {
        console.log(`this happen asynchronously ${a},${b}`)
    })
    console.log("checking")
})
console.log('start')
myEmitter.emit('event', 'a', 'b')
console.log('end')