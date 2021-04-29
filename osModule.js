const os = require('os');
console.log(os.userInfo());

console.log(os.uptime());

const currentos = {
    name : os.type(),
    release : os.release(),
    total_space : os.totalmem(),
    free_space : os.freemem(),
};
console.log(currentos);