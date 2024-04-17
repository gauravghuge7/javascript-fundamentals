const prompt = require('prompt-sync')();


let x = parseInt(prompt(" enter the value of x" ))

const square = () => x * x;


console.log(square(5));