'use strict'

const {Calculator} = require("./calculator.js")

let calculator = new Calculator(5);
console.log(calculator.add(2).substract(2).multiply(6).divide(2).square(2).squareRoot(2).is());