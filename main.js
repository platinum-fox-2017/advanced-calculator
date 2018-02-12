'use strict'

const {Calculator} = require("./calculator.js")

var myInteger = new Calculator(2);
console.log(myInteger.add(1).multiply(4).divide(2).substract(2).square(3).squareRoot().val);