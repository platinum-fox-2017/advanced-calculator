'use strict'

class Calculator {
  //write your code here
  constructor () {
    this._num = 0
  }
  add (num) {
    this._num += num
    return this
  }
  substract (num) {
    this._num -= num
    return this
  }
  multiply (num) {
    this._num *= num
    return this
  }
  divide (num) {
    this._num /= num
    return this
  }
  square (num) {
    this._num = Math.pow(this._num, num)
    return this
  }
  squareRoot (num) {
    this._num = Math.pow(this._num, 1/num)
    return this
  }
  pi(){
    return Math.PI
  }
  result(){
    return this._num
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calculator = new Calculator
console.log(calculator.add(6).multiply(6).multiply(calculator.pi()).result());

module.exports = {
  Calculator
}
