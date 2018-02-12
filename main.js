'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let letsCal = new Calculator(3)
// letsCal.num1 = 3
console.log(letsCal.multiply(letsCal.pi).result())


letsCal.num1 = 7
console.log(letsCal.add(1).multiply(7).result())
