'use strict'

const {Calculator} = require("./calculator.js")

let calc = new Calculator(343)
console.log(calc.squareRoot(3).phi().add(10).substract(5).divide(10).multiply(5).square(2).result()); // 181.9801
// execute function on calculator.js in here