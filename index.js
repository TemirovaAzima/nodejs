// (function(){
//     console.log('hello')
// })();
//
// (()=>{
//     console.log('hey there')
// })();
//
// (async ()=>{
//     console.log('nice to see you')
// })()

const event = new Date('August 19, 1975 23:15:30 UTC');

const jsonDate = event.toJSON()
console.log(jsonDate.toString())

for(let i =0 ; i<1000 ; i++){
    console.log(i)
}