'use strict'

class Calculator {
  //write your code here
  constructor() {
    this._number = 0
  }
  add(number) {
    this._number += number
    return this
  }
  substract(number) {
    this._number -= number
    return this
  }
  multiply(number) {
    this._number *= number
    return this
  }
  divide(number) {
    this._number /= number
    return this
  }
  square(number = 2) {
    this._number = Math.pow(this._number, number)
    return this
  }

  squareRoot() {
    this._number = Math.sqrt(this._number)
    return this
  }

  constPi() {
    this._number = 2 * 3.14 * this._number
    return this
  }



  print() {
    return `${this._number}`
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
