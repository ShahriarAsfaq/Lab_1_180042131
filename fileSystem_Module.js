const fs= require("fs");

fs.writeFileSync("./writingPad.txt","HEllo NodeJS");

fs.appendFileSync("./writingPad.txt",", and javaScript");

fs.rename("./writingPad.txt","./Writing_Pad.txt",(err) =>{
    if (err){
        console.log(err);
    }
    else{
        console.log("renaming success");
    }
    });

fs.readFile("./Writing_Pad.txt","utf-8",(err,data) =>{
    if (err){
        console.log(err);
    }
    else{
        console.log(data);
    }
    });

console.log("Before");

 fs.readFile("./Writing_Pad.txt","utf-8",(err,data) =>{
        if (err){
            console.log(err);
        }
        else{
            fs.appendFileSync("./Writing_Pad.txt"," extra file appended");
            fs.readFile("./Writing_Pad.txt","utf-8",(err,data) =>{
                if (err){
                    console.log(err);
                }
                else{
                    console.log(data);
                }
                });
        }
        });

        console.log("After");

        fs.unlink("./Writing_Pad.txt",(err) =>{
            if (err){
                console.log(err);
            }
            else{
                console.log("delete success");
            }
            });