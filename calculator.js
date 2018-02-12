'use strict'

class Calculator {
  //write your code here
  constructor () {
    this._amount = 0
  }

  setAmount(numb){
    this._amount = numb
    return this
  }
  
  add (numb) {
    this._amount += numb
    return this
  }
  substract (numb) {
    this._amount = this._amount - numb
    return this
  }
  multiply (numb) {
    this._amount = this._amount * numb
    return this
  }
  divide (numb) {
    this._amount = this._amount / numb
    return this
  }
  square (numb) {
    this._amount = Math.pow(this._amount,numb)
    return this
  }
  squareRoot (numb) {
    let initialize = this._amount
    for(let i = 0; i < this._amount; i++){
      initialize /= numb
      if(initialize === numb){
        this._amount = i + 2
      }
    }
    return this
  }

  pi(){
    this._amount = this._amount * 22/7
    return this
  }

  getTotal(){
    return this._amount
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
