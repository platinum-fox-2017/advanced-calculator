'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calc = new Calculator()

console.log(calc.add(10).divide(2).square(2).multiply(4).result());
