'use strict'

class Calculator {
  //write your code here
  constructor (value) {
    this.value=value||0;
  }
  add (num) {
    this.value+=num;
    return this;
  }
  substract (num) {
    this.value-=num;
    return this;
  }
  multiply (num) {
    this.value*=num;
    return this;
  }
  divide (num) {
    this.value/=num;
    return this;
  }
  square (num) {
    num=num||2;
    this.value=Math.pow(this.value,num);
    return this;
  }
  squareRoot (num) {
    num=num||2;
    this.value=Math.pow(this.value,1/num);
    return this;
  }

  multiplyByPi() {
    this.value=Number(this.value*Math.PI).toFixed(2)
    return this;
  }

  submit() {
    console.log(this.value);
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
