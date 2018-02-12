'use strict'

class Calculator {
  constructor(num) {
    this.num = num
  }

  add(input) {
    this.num += input
    return this
  }

  substract(input) {
    this.num -= input
    return this
  }

  multiply(input) {
    this.num *= input
    return this
  }

  divide(input) {
    this.num /= input
    return this
  }

  square(exp) {
    for(let i = 1; i < exp; i++) {
      this.num *= this.num;
    }
    return this
  }

  squareRoot(base) {
    this.num = Math.round(Math.pow(this.num, (1/base)))
    return this
  }

  phi() {
    this.num *= 3.14
    return this
  }

  result() {
    return this.num
  }
}

let cal = new Calculator(343)
console.log(cal.squareRoot(3).phi().add(10).substract(5).divide(10).multiply(5).square(2).result()); // 181.9801

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = {
  Calculator
}
