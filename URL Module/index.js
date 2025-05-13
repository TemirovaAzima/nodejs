import {URL} from 'url';

const myURL = new URL('https://codercommunity.uz:1234/about/page1/{sub:2}?query=string/#hash/');

console.log(myURL.host)
console.log(myURL.hostname)
console.log(myURL.port)
console.log(myURL.protocol)
console.log(myURL.pathname)
console.log(myURL.search)
console.log(myURL.hash)

console.log(myURL.toJSON())
console.log(myURL.toString())