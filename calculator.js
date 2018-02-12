'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.number = 0
  }
  add (num) {
    this.number += num
    return this
  }
  substract (num) {
    this.number -= num
    return this
  }
  multiply (num) {
    this.number *= num
    return this
  }
  divide (num) {
    this.number /= num
    return this
  }
  square () {
    this.number = Math.pow(this.number,2)
    return this

  }
  squareRoot () {
    this.number = Math.round(Math.pow(this.number,0.5))
    return this
  }
}

var calc = new Calculator
calc.add(5).substract(3).multiply(4).square().squareRoot()
console.log(calc.number);

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
