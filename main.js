'use strict'

const {Calculator} = require("./calculator.js")



// execute function on calculator.js in here
let calculator = new Calculator(5);
console.log(calculator.add(5).add(2).multiply(3).power(4).root(4).result);
console.log("\nCalculate Circle: ");
let radius = new Calculator(3);
let luas = radius.multiply(radius).multiply(radius.pi()).result;
console.log(luas);
let tes = new Calculator(3);
console.log("\nCalculate using own value: ");
console.log(tes.add(5).add(tes).result);
