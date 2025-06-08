import EventEmitter from "events";

const customEmitter = new EventEmitter();
// the order matters first listener, second emit event not opposite
// listeners run synchronously
// imagine when the door rings, u listen and open it
// first u need to set up your ears in order to catch that sound and then react to it
// the same with code first u set up listeners, when the events are raised ur listeners will catch that event and run the callback
// if you emit first , and no one's listening yet, the event is lost


customEmitter.once("response",(name,id)=>{
    console.log(`user: ${name} id: ${id}`)
})
// once() only works for the first events even if the others events get arisen
customEmitter.emit("response",'Azima',1)
customEmitter.emit("response","Muxlisa",2)
customEmitter.emit("response","Husan",3)