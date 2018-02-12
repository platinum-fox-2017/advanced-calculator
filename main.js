'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calculate = new Calculator()
console.log(calculate,"awal")
console.log(calculate.add(5).substract(2).multiply(10).divide(10).square(2).squareRoot().save())
console.log(calculate.circleArea(7).save())