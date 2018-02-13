'use strict'

const { Calculator } = require("./calculator.js")

// execute function on calculator.js in here


const calc = new Calculator();
calc
    .add(5)
    .substract(3)
    .multiply(4)
    .square()
    .squareRoot();
console.log(calc);