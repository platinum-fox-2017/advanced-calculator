'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
  }
  add (target) {
    this.number += target;
    return this;
  }
  substract (target) {
    this.number -= target;
    return this;
  }
  multiply (target) {
    this.number *= target;
    return this;
  }
  divide (target) {
    this.number /= target;
    return this;
  }
  square (target) {
    this.number = Math.pow(this.number,target);
    return this;
  }
  squareRoot (target) {
    this.number = Math.round(Math.pow(this.number,1/target));
    return this;
  }
  circle(target) {
    //Area of circle = Pie * Radius to the power of 2;
    this.number = Math.round(Math.PI* Math.pow(this.number,2));
    return this;
  }
  print(){
    return this.number ;
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
