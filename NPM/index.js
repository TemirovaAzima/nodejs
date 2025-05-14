import http from 'http'

const server = http.createServer((req, res) => {

    res.writeHead(202,"Good",{"Content-Type":"text/html"})
    res.end("<h1>Hello Nodejs</h1>")
})

server.listen(8000,()=>console.log('Server started on port 8000'))