'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.number = 0
  }
  add (addNum) {
    this.number = this.number + addNum
    return this
  }
  substract (subNum) {
    this.number = this.number - subNum
    return this
  }
  multiply (xNum) {
    this.number = this.number * xNum
    return this
  }
  divide (divNum) {
    this.number = this.number / divNum
    return this
  }
  square (squareNum=2) {
    this.number = Math.pow(this.number,squareNum)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  circleArea(radius){
    this.number = (Math.PI * Math.pow(radius,2)).toFixed(2)
    return this

  }
  save (){
    return `Totalnya adalah ${this.number}`

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
