const fs = require("fs");
const fh = fs.openSync("secfb","r+");
console.log(fh);
fs.writeFileSync(fh,"Chandan Dwivedi , I am from KKannauj. ");
fs.close(fh);
console.log(fs.readFileSync("secfb" , "utf8"));
fs.renameSync("secfb","SecfB");
fs.appendFileSync(fh,"hello");