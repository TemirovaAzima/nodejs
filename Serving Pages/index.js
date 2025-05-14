import fs from 'fs';
import http from 'http';

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('../public/home.html',(err,data)=>{
            if(err){
                res.writeHead(500);
                res.end('Error loading page');
            }else{
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(data)
            }
        });
    }else{
        res.writeHead(404);
        res.end('Page not found')
    }
});

server.listen(8000,()=>{
    console.log('Server running on port 3000');
})