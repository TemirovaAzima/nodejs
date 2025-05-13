import * as http from 'http';

const server = http.createServer((req,res)=>{
    // res.statusCode = 404
    // res.statusMessage = 'Not Found'
    // res.write("<h1>hello </h1>")
    // res.end('Bye')
    // res.writeHead(202,"Good",{"Content-Type": 'text/html'})
    // res.write('Hello world')
    // res.end('hey again')
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify({name:"Azima",age:16}))
})

server.listen(8000,()=> console.log('Server running on port 8000'))