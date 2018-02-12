'use strict'

class Calculator {
  //write your code here
  constructor () {
    this._result = 0;
  }

  add (num) {
    this._result += num;
    return this
  }

  substract (num) {
    this._result -= num;
    return this
  }

  multiply (num) {
    this._result *= num;
    return this
  }

  divide (num) {
    this._result /= num;
    return this
  }
  
  square (num) {
    this._result = Math.pow(this._result, num)
    return this
  }
  
  squareRoot (num) {
    this._result = Math.sqrt(num)
    return this
  }

  MathPi (num) {
    this._result = Math.PI * (num + num);
    return this
  }

  print() {
    console.log(`Result: ${this._result}`);
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

module.exports = {
  Calculator
}
