'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.result = number;
    this.phi = Math.PI;
  }

  add (num) {
    this.result += num;
    return this;
  }

  substract (num) {
    this.result -= num;
    return this;
  }

  multiply (num) {
    this.result *= num;
    return this;
  }

  divide (num) {
    this.result /= num;
    return this;
  }

  square (num) {
    this.result = Math.pow(this.result, num);
    return this;
  }

  squareRoot (num) {
    this.result = Math.sqrt(this.result);
    return this;
  }

  circleArea (num) {
    let area = this.phi * (num/2) * (num/2);
    this.result = area;
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
