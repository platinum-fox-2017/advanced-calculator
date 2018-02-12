'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
const start = new Calculator()
console.log(start.add(2).substract(1).multiply(11).divide(2).square().squareRoot());