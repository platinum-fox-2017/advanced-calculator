'use strict'


class Calculator {
  constructor(input){
    this.input = input || 0
    this.result = 0
    this.pi = 3.14159265359
  }

  add(operator){
    this.process = this.input + operator
    console.log(`${this.input} + ${operator} = ${this.finish()}`)
    this.result = this.process
    this.input = this.process
    return this
  }

  substract(operator){
    this.process = this.input - operator
    console.log(`${this.input} - ${operator} = ${this.finish()}`)
    this.result = this.process
    this.input = this.process
    return this
  }

  multiply(operator){
    this.process = this.input * operator
    console.log(`${this.input} x ${operator} = ${this.finish()}`)
    this.result = this.process
    this.input = this.process
    return this
  }

  divide(operator){
    this.process = this.input / operator
    console.log(`${this.input} / ${operator} = ${this.finish()}`)
    this.result = this.process
    this.input = this.process
    return this
  }

  square(operator){
    this.process = Math.pow(this.input, operator)
    console.log(`${this.input} ^ ${operator} = ${this.finish()}`)
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
    console.log(`${operator} ${root} ${this.input} = ${this.finish()}`)
    this.result = this.process
    this.input = this.process
    return this
  }

  finish(){
    this.result = this.process
    return this.result
  }
}

var calculator = new Calculator(10)

calculator.add(3).substract(2).multiply(2).square(2).root(2).add(calculator.pi)
console.log(calculator);
console.log(calculator.finish());



module.exports = {
  Calculator
}
