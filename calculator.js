'use strict'

class Calculator {
  //write your code here
  constructor (number){         //number1, number2) {
    this.num = number
    
  }
  add (num) {
    // var addProcess = this.num1 + this.num2
    // return addProcess
    this.num += num
    return this
  }
  substract (num) {
    // var substractProcess = this.num1 - this.num2
    // return substractProcess
    this.num -= num
    return this
  }
  multiply (num) {
    // var multiplyProcess = this.num1 * this.num2
    // return multiplyProcess
    this.num *= num
    return this
  }
  divide (num) {
    // var divideProcess = this.num1 / this.num2
    // return divideProcess
    this.num /= num
    return this
  }
  square () {
    this.num *= 2
    return this
  }
  squareRoot (num) {
    // var squareProcess = this.num1
    // for(let i=1; i<=this.num2; i++){
    //   squareProcess *= this.num1
    // } 
    // return squareProcess
    var angka = this.num
    for(let i=1; i<num; i++){
      this.num *= angka
    }
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

var kalkulator = new Calculator(25)

// console.log(kalkulator.add())
// console.log(kalkulator.substract())
// console.log(kalkulator.multiply())
// console.log(kalkulator.divide())
// console.log(kalkulator.square())

console.log(kalkulator.add(36).substract(10).multiply(2))


module.exports = {
  Calculator
}
