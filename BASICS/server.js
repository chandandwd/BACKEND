const http = require("http");
let server = http.createServer((request,response)=>{
    console.log(request);
    response.end("server started successfully");

});
server.listen(8000,'Localhost',(err)=>{
    if(err) console.log(err);
    else console.log("server started at http://localhost:8000");
})