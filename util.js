const { hellofunc } = require("./helloworld");
const hellof = require("./helloworld");


setInterval(() => {
    hellof.hellofunc();
}, 1000);
setTimeout(() => {
    console.log(hellof.name);
}, 3000);