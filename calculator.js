'use strict'

class Calculator {
  //write your code here
  constructor (hasil) {
    this.hasil=hasil
  }
  add (value) {
    this.hasil= this.hasil+value
    return this
  }
  substract (value) {
    this.hasil= this.hasil-value
    return this
  }
  multiply (value) {
    this.hasil= this.hasil*value
    return this
  }
  divide (value) {
    this.hasil= this.hasil/value
    return this
  }
  square (value) {
    this.hasil= Math.pow(this.hasil,value)
    return this
  }
  squareRoot (value) {
    // this.hasil= Math.pow(this.hasil,(1/value))
    this.hasil= Math.sqrt(this.hasil,value)
    return this
  }

  konstanta (){
    this.hasil=this.hasil*Math.PI
    return this
  }
}

let hitung = new Calculator(5)
console.log(hitung.add(5).divide(5).multiply(4).square(3))

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
