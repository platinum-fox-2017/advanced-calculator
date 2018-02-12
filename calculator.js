'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.num = 1
  }
  add (numAdd) {
    this.num += numAdd
    return this
  }
  substract (numSubstract) {
    this.num -= numSubstract
    return this
  }
  multiply (numMultiply) {
    this.num *= numMultiply
    return this
  }
  divide (numDivide) {
    this.num /= numDivide
    return this
  }
  square () {
    this.num = Math.pow(this.num, 2)
    return this
  }
  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
  }
  diameter () {
    this.num = Math.PI * Math.pow(this.num, 2)
    return this
  }
  save () {
    return this.num
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = {Calculator}