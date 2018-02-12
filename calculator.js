'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.total = 0
  }
  add (num) {
    this.total += num
    return this
  }
  substract (num) {
    this.total -=num
    return this
  }
  multiply (num) {
    this.total *= num
    return this
  }
  divide (num) {
    this.total = this.total/num
    return this
  }
  square (num) {
    this.total = Math.pow(this.total,num)
    return this
  }
  squareRoot (num){
    this.total = Math.round(Math.pow(this.total,1/num))
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calculator = new Calculator()
console.log(calculator.add(4).substract(0).multiply(1).divide(1).square(3).squareRoot(3))

module.exports = {
  Calculator
}
