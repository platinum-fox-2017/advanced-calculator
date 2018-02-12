
class Calculator {
  constructor(input){
    this.input = input || 0
    this.result = 0
    this.pi = 3.14159265359
  }

  addition(operator){
    this.input = this.input + operator
    return this
  }

  subtraction(operator){
    this.input = this.input - operator
    return this
  }

  multiplication(operator){
    this.input = this.input * operator
    return this
  }

  division(operator){
    this.input = this.input / operator
    return this
  }

  powerOf(operator){
    this.input = Math.pow(this.input, operator)
    return this
  }

  root(operator){
    this.input = Math.pow(this.input, 1/operator)
    return this
  }

  finish(){
    this.result = this.input
    return this.result
  }
}

var calculator = new Calculator(10)

calculator.addition(3).subtraction(2).multiplication(2).powerOf(2)
console.log(calculator);
console.log(calculator.finish());
