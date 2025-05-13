import * as http from 'http';

const server = http.createServer((req,res)=>{
    res.write("<p>hey azima</p>")
})

server.listen(8000,()=> console.log('Server started on port 8000'))