const http = require('http');

const load = require('./loadContent.js');

const server = http.createServer((req, res)=>{
    if (req.url == "/") {
        res.write(load.content.index);
        res.end();
    } else if (req.url == "/about") {
        res.write(load.content.about);
        res.end();
    } else if (req.url == "/blog") {
        res.write(load.content.blog);
        res.end();
    } else if (req.url == "/contact") {
        res.write(load.content.contact);
        res.end();
    } else if (req.url == "/pricing") {
        res.write(load.content.pricing);
        res.end();
    } else if (req.url == "/services") {
        res.write(load.content.services);
        res.end();
    } else if (req.url == "/work") {
        res.write(load.content.work);
        res.end();
    } else {
        res.write("<h1>Page Doesn't Exist...:(</h1>")
        res.end();
    }
});

module.exports = {server};