'use strict'

const PI = 3.14

class Calculator {
  //write your code here
  constructor (result) {
    this.result = result
  }
  add (value1) {
    this.result = this.result + value1
    return this
  }

  substract (value) {
    this.result = this.result - value
    return this
  }

  multiply (value) {
    this.result = this.result * value
    return this
  }

  divide (value) {
    this.result = this.result / value
    return this
  }

  square (value) {
    this.result = Math.pow(this.result,value)
    return this
  }

  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this
  }

  // aroundCircle(){
  //   this.result = 2 * PI * this.result
  //   return this
  // }

  largeCircle(){
    this.result = (this.result * this.result) * PI
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

let calc = new Calculator(5)

console.log(calc.add(3).substract(2).multiply(5).divide(10).square(4).squareRoot().largeCircle())
// console.log(calc.add(3))
// console.log(calc.substract(2))
// console.log(calc.multiply(5))
// console.log(calc.divide(10))
// console.log(calc.square(4))
// console.log(calc.squareRoot())
// // console.log(calc.aroundCircle())
// console.log(calc.largeCircle())

module.exports = {
  Calculator
}
