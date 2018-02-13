'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calculate = new Calculator()
console.log(calculate,"awal")
calculate.add(5).substract(2).multiply(10).divide(10).square(10).squareRoot().save()
console.log(calculate,'---')
console.log(calculate.circleArea(7).save())

const calc = new Calculator();
calc
  .add(1)
  .add(2)
  .substract(1)
  .multiply(11)
  .divide(2)
  .square();
console.log(calc);

// return Calculator { number: NaN }