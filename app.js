
const pageContent = require('./loadContent');
const http = require("http");
const myServer = http.createServer((req,res) => {

    if(req.url=="/"){
       res.write(pageContent.base);
       res.end();
    }
    else if(req.url=="/blog"){
        res.write(pageContent.blog);
        res.end();
    }
    else if(req.url=="/about"){
        res.write(pageContent.about);
        res.end();
    }
    else if(req.url=="/contact"){
        res.write(pageContent.contact);
        res.end();
    }
    else if(req.url=="/pricing"){
        res.write(pageContent.pricing);
        res.end();
    }
    else if(req.url=="/services"){
        res.write(pageContent.services);
        res.end();
    }
    else if(req.url =="/work"){
        res.write(pageContent.work);
        res.end();
    }
    else{
        res.write("<h1>page doesn't exist<h1>");
        res.end();
    }
});

myServer.listen(2131);