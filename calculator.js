'use strict'


class Calculator {
  constructor(input){
    this.input = input || 0
    this.process = 0
    this.result = 0
    this.pi = 3.14159265359
  }

  add(operator){
    this.process = this.input + operator
    console.log(`${this.input} + ${operator} = ${this.process}`)
    this.result = this.process
    this.input = this.process
    return this
  }

  substract(operator){
    this.process = this.input - operator
    console.log(`${this.input} - ${operator} = ${this.process}`)
    this.result = this.process
    this.input = this.process
    return this
  }

  multiply(operator){
    this.process = this.input * operator
    console.log(`${this.input} x ${operator} = ${this.process}`)
    this.result = this.process
    this.input = this.process
    return this
  }

  divide(operator){
    this.process = this.input / operator
    console.log(`${this.input} / ${operator} = ${this.process}`)
    this.result = this.process
    this.input = this.process
    return this
  }

  square(operator){
    this.process = Math.pow(this.input, operator)
    console.log(`${this.input} ^ ${operator} = ${this.process}`)
    this.result = this.process
    this.input = this.process
    return this
  }

  root(operator){
    if(!operator){
      operator = 2
    }
    let root = String.fromCharCode(8730)
    this.process = Math.pow(this.input, 1/operator)
    console.log(`${operator} ${root} ${this.input} = ${this.process}`)
    this.result = this.process
    this.input = this.process
    return this
  }

  finish(){
    this.result = this.process
    console.log(this.result);
    return this
  }
}





module.exports = {
  Calculator
}
