'use strict'

class Calculator {
  constructor (currentNum) {
    this.currentNum = currentNum
  }
  add (num) {
    this.currentNum += num
    return this
  }
  substract (num) {
    this.currentNum -= num
    return this
  }
  multiply (num) {
    this.currentNum = this.currentNum * num
    return this
  }
  divide (num) {
    this.currentNum = this.currentNum / num
    return this
  }
  square (num) {
    this.currentNum = Math.pow(this.currentNum, num)
    return this
  }
  squareRoot (num) {
    this.currentNum = Math.pow(this.currentNum, 1/num)
    return this
  }
  pi(num) {
    this.currentNum = this.currentNum * (22/7)
    return this
  }
}

const calc = new Calculator(0)
console.log(calc.add(5).substract(3).multiply(6).divide(4).square(2).squareRoot(2).pi());

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
