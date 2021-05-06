const helloFn = require('./helloWorld');

//setInterval

setInterval(()=>{
    helloFn.Hello();
}, 1000);

//setTimeout
setTimeout(()=>{
    console.log(helloFn.name);
}, 5000);