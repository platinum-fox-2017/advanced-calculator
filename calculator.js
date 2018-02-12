'use strict'

class Calculator {
  //write your code here
  constructor(val) {
    this.val = val;
    this.phi = 3.14;
  }

  add(number) {
    this.val = this.val + number;
    return this;
  }

  substract(number) {
    this.val = this.val - number;
    return this;
  }

  multiply(number) {
    this.val = this.val * number;
    return this;
  }

  divide(number) {
    this.val = this.val / number;
    return this;
  }

  square(number=1) {
    if(number == 0) {
        this.val = 1;
        return this
    } else if (number == 1) {
        return this;
    } else {
        let retVal = 1;
        for(let i = 0; i < number; i++) {
            retVal = retVal * this.val;
        }
        this.val = retVal;
        return this;
    }
  }

  squareRoot () {
    let retVal = Math.sqrt(this.val);
    this.val   = retVal;
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
