'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here

let new_operation = new Calculator(5)
// console.log(new_operation.square(5).print());
console.log(new_operation.add(5).multiply(5).print());

