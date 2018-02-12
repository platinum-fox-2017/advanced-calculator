'use strict'

const { Calculator } = require("./calculator.js")

// execute function on calculator.js in here

let calculator = new Calculator()
console.log(calculator.add(5).constPi().add(2).print())