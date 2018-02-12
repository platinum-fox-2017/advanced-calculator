'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calc = new Calculator(1);

let data = calc.add(2).substract(1).multiply(11).divide(2).square().squareRoot().number;
console.log(data);