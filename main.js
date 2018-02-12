'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calc = new Calculator(2);

console.log(calc.square(4).add(5));

console.log(calc.circleArea(5)); //parameternya adalah diameter
