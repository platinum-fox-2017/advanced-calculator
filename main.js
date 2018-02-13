'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
const calculator = new Calculator();

calculator.add(10).substract(4).multiply(10).divide(10).add(3).square(3).print()