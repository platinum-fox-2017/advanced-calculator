'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num=num;
  }
  add (numPlus) {
    this.num=this.num+numPlus;
    return this;
  }
  substract (numSub) {
    this.num=this.num-numSub;
    return this;
  }
  multiply (numMulti) {
    this.num=this.num*numMulti;
    return this;
  }
  divide (numDivide) {
    this.num=this.num/numDivide;
    return this;
  }
  square (numSqr) {
    this.num=Math.pow(this.num,numSqr);
    return this;
  }
  squareRoot (numSqroot) {
    this.num=Math.ceil(Math.pow(this.num, 1/numSqroot));
    return this;
  }

  pi(){
    this.num=this.num*Math.PI;
  }
}

var newCalc = new Calculator(10);

newCalc.add(5).substract(6).multiply(2).divide(3).square(3).squareRoot(3).pi();

console.log(newCalc.num);
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
