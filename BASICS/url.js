const url = require('url');
const http = require('http');
const fs = require('fs');

let server = http.createServer((request, response) => {

    const da = new Date();


    fs.appendFile(
        "serlog.txt",
        `${da} ${request.url}: new request received\n`,
        (err) => {
            if (err) throw err;
        }
    );

    console.log(request.url);

    response.write("<h1>WELCOME TO MY WEBSITE</h1>");
    response.end();

}).listen(8000, 'localhost', (err) => {
    if (err) console.log(err);
    else console.log("Server started at http://localhost:8000");
});



const myurl = "https://leetcode.com";
const dis = url.parse(myurl, true);
console.log(dis);
