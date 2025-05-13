import * as http from 'http';

const server = http.createServer((req,res)=>{
    res.end('Hello World!')
    console.log(req)
})

server.listen(8000,()=> console.log('Server started on port 8000'))