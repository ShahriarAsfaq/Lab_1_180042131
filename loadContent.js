const fs= require("fs");

const base=fs.readFile("./HTML/index.html","utf-8",(err,data) =>{
    if (err){
        console.log(err);
    }
    else{
        console.log(data);
    }
    });

const blog=fs.readFile("./HTML/blog.html","utf-8",(err,data) =>{
    if (err){
            console.log(err);
     }
    else{
            console.log(data);
    }
    });

    const about=fs.readFile("./HTML/about.html","utf-8",(err,data) =>{
        if (err){
            console.log(err);
        }
        else{
            console.log(data);
        }
        });
    
        const contact=fs.readFile("./HTML/contact.html","utf-8",(err,data) =>{
            if (err){
                console.log(err);
            }
            else{
                console.log(data);
            }
            });

            const pricing=fs.readFile("./HTML/pricing.html","utf-8",(err,data) =>{
                if (err){
                    console.log(err);
                }
                else{
                    console.log(data);
                }
                });

                const services=fs.readFile("./HTML/services.html","utf-8",(err,data) =>{
                    if (err){
                        console.log(err);
                    }
                    else{
                        console.log(data);
                    }
                    });

                    const work=fs.readFile("./HTML/work.html","utf-8",(err,data) =>{
                        if (err){
                            console.log(err);
                        }
                        else{
                            console.log(data);
                        }
                        });

                        module.exports={about,blog,contact,base,pricing,services,work};