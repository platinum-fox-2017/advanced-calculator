'use strict'

class Calculator {
  constructor () {
    this.number = 1
  }
  add (addedNum) {
    this.number+=addedNum
    return this
  }
  substract (substractedNum) {
    this.number-=substractedNum
    return this
  }
  multiply (multipliedNum) {
    this.number*=multipliedNum
    return this
  }
  divide (dividedNum) {
    this.number/=dividedNum
    return this
  }
  square () {
    this.number = Math.pow(this.number, 2)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  circumference(){
    this.number = 2 * Math.PI * this.number
    return this
  }
  print(){
    console.log(`hasilnya : ${this.number}`)
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
