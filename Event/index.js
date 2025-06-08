const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}
// extending allows u to create own custom object of EventEmitter , meaning that u can add own properties and methods apart from that is built in
// you are creating ur own custom version of EventEmitter , allowing to add custom methods or properties
// difference between class and object is that class is a blueprint like human and object is a actual instance if the blueprint like Richael person
const myEmitter = new MyEmitter();
myEmitter.on('event',()=>{
    console.log('an event occurred!');
});
myEmitter.emit('event');