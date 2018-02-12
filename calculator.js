'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num1 = num
    this.pi = Math.PI
  }
  add(num2) {
    this.num1 += num2
    return this
  }

  substract(num2) {
    this.num1 -= num2
    return this
  }

  multiply (num2) {
    this.num1 *= num2
    return this
  }

  divide (num2) {
    this.num1 = this.num1 / num2
    return this
  }

  square (num2) {
    this.num1 = Math.pow(this.num1, num2)
    return this
  }

  squareRoot () {
    this.num1 = Math.sqrt(this.num1)
    return this
  }

  result() {
    return this.num1
  }

}

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
