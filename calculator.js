'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this._phi = Math.PI;
    this._num = num;
  }
  add (num) {
    this._numAdd = num;
    if (this._numAdd != 0) {
      this._num += this._numAdd;
    }
    return this;
  }

  substract (num) {
    this._numSubst = num;
    if (this._numSubst != 0) {
      this._num -= this._numSubst;
    }
    return this;
  }

  multiply (num) {
    this._numMulti = num;
    if (this._numMulti != 0) {
      this._num *= this._numMulti;
    }
    return this;
  }

  divide (num) {
    this._numDiv = num;
    if (this._numDiv != 0) {
      this._num /= this._numDiv;
    }
    return this;
  }

  square (num) {
    this._numSq = num;
    if (this._numSq != 0) {
      this._num = Math.pow(this._num, this._numSq);
    }
    return this;
  }

  squareRoot () {
    if (this._num != 0) {
      this._num = Math.sqrt(this._num);
    }
    return this;
  }

  result () {
    return `${this._num}`;
  }

}

var result = new Calculator(2);

console.log(result.add(2).substract(1).multiply(3).divide(3).square(2).squareRoot().result());
console.log(result);


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
