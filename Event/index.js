import events from 'node:events';
events.captureRejections = true;

// u always should handle promise rejection because it will crash ur Nodejs
// u can either use captureRejections or handle properly the rejection with .on('error')
// or use both to handle everything wonderfully
const emitter = new events.EventEmitter();
emitter.on('myEvent',async()=>{
    throw new Error('Async error')
});
console.log('middle')
emitter.on('error',(err)=>{
    console.log('Caught:',err.message)
})

emitter.emit('myEvent')
console.log('end')