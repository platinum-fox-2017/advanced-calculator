'use strict'

class Calculator {
  
  constructor (value) {
    this.value = value;
  }

  add (num) {
    let valueBefore = this.value;
    this.value += num;
    console.log(`${valueBefore}+${num} = ${this.value}`);
    return this;
  }

  substract (num) {
    let valueBefore = this.value;
    this.value -= num;
    console.log(`${valueBefore}-${num} = ${this.value}`);
    return this;
  }

  multiply (num) {
    let valueBefore = this.value;
    this.value *= num;
    console.log(`${valueBefore}*${num} = ${this.value}`);
    return this;
  }

  divide (num) {
    let valueBefore = this.value;
    this.value /= num;
    console.log(`${valueBefore}/${num} = ${this.value}`);
    return this;
  }

  square (num) {
    let valueBefore = this.value;
    this.value = Math.pow(this.value, num);   
    console.log(`${valueBefore}^${num} = ${this.value}`);
    return this;
  }

  squareRoot (num) {
    let valueBefore = this.value;
    this.value = Math.sqrt(this.value);
    console.log(`${valueBefore} square(${num}) = ${this.value}`);
    return this;
  }

  is(){
    return `The result is = ${this.value}`;
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
