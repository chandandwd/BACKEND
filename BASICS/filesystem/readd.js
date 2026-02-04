const fs = require("fs");
const fh = fs.writeFileSync("secfb","w+");
fh.close();
const a = fs.readFileSync(fh,"utf-8");
fs.rename("secfb","secFB");
console.log(a);

