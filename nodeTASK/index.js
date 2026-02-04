const http=require('http');
const fs=require('fs');
const url=require('url');
const server=http.createServer((req,res)=>{
    switch(req.url){
        case '/':
            fs.readFile('./component/home.html',(err,page)=>{
                if(err){
                    res.end();
                }else{
                    res.write(page);
                    res.end();
                }
            });
            
            case '/about':
                 fs.readFile('./component/about.html',(err,page)=>{
                if(err){
                    res.end();
                }else{
                    res.write(page);
                    res.end();
                }
            });
            case '/profile':
                 fs.readFile('./component/profile.html',(err,page)=>{
                if(err){
                    res.end();
                }else{
                    res.write(page);
                    res.end();
                }
            });
    }
    });
server.listen(8000,'localhost',(err)=>{
    if(err){ console.log(err);}
    else{console.log("server started successfully http://localhost:8000");}
});