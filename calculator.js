'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this._num = num
  }
  add (number) {
    this._num = this._num + number
    return this
  }
  substract (number) {
    this._num = this._num - number
    return this
  }
  multiply (number) {
    this._num = this._num * number
    return this
  }
  divide (number) {
    this._num = this._num / number
    return this
  }
  square (number) {
    this._num = Math.pow(this._num, number)
    return this
  }
  squareRoot (number) {
    this._num = Math.pow(this._num, 1/number)
    return this
  }
  circle () {
    this._num = Math.PI * Math.pow(this._num, 2)
    return this
  }
  result () {
    return `Total = ${this._num}`
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
