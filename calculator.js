'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number;
  }
  add (number) {
    this.number += number;
    return this;
  }
  substract (number) {
    this.number -= number;
    return this;
  }
  multiply (number) {
    this.number *= number;
    return this;
  }
  divide (number) {
    this.number /= number;
    return this;
  }
  square () {
    this.number = Math.pow(this.number, 2);
    return this;
  }
  squareRoot () {
    this.number = Math.sqrt(this.number);
    return this;
  }
  circle(number) {
    this.number = 3.14 * this.square().number;
    return this;
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
