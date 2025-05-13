import http from 'http'

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    const cleanUrl = req.url.replace(/^\/+/,'')

    if(cleanUrl === ''){
        res.writeHead(200)
        res.end(JSON.stringify({message:'Welcome to Home'}));
    }else if(cleanUrl === 'about'){
        res.writeHead(200)
        res.end(JSON.stringify({message:'About us page', author: "Azima"}));
    }else if(cleanUrl === 'contact'){
        res.writeHead(200)
        res.end(JSON.stringify({message: 'Contact page', email:'azima@example.com'}));
    }else{
        res.writeHead(404)
        res.end(JSON.stringify({message:'404 Not Found', status: 404}));
    }
})

server.listen(8000,()=> console.log('Server running on port 8000'))