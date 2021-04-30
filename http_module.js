const http = require("http");

const newServer = http.createServer((req,res) => {
 
    if(req.url=="/"){
        res.write("<h1>this is base</h1>");
        res.end();
    }
    else if(req.url=="/home"){
        res.write("<h1>this is home</h1>");
        res.end();
    }
    else{
        res.write("<h1>not found</h1>");
        res.end();
    }
});

newServer.listen(1111);