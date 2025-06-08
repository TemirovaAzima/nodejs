import EventEmitter from "events"

// EventEmitter() is a class
// new EventEmitter() creates class  of constructor function of EventEmitter() class
// () is recommended to write because you are calling the constructor of the EventEmitter class
// to create a new instance - kinda like building a new machine
// () means 'run constructor function to create a fresh object'

const customEmitter = new EventEmitter();


// on() is listener that listens when event is raised and calls the callback
// it is similar to addEventListener() , however on() used a lot
// can receive data as parameter from emitter
// the names of the listeners need to be exact with events emitters
customEmitter.on("response",(name,id)=>{
    console.log(`user: ${name} id: ${id}`)
})

// emit() will raise an event
customEmitter.emit("response","Azima",1);
customEmitter.emit("response", "Aziko",2)
customEmitter.emit("response", "Mom",3)