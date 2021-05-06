const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url == "/") {
        res.write('<h1>Base URL</h1>');
        res.end();
    } else if (req.url == "/home") {
        res.write('Home page');
        res.end();
    }  else {
        res.write("<h1>This Page Doesn't Exist</h1>")
        res.end();
    }
});

module.exports = {server};