'use strict'

const {Calculator} = require("./calculator.js")

const calc = new Calculator();
calc
  .add(1)
  .add(2)
  .substract(1)
  .multiply(11)
  .divide(2)
  .square()
console.log(calc);