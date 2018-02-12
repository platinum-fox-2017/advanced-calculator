'use strict'

class Calculator {
  constructor (number) {
    this.number = number
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
  square (squaredNum) {
    this.number = Math.pow(squaredNum, this.number)
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
