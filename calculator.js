'use strict'

class Calculator {
  //write your code here
  constructor(num = 0){
    this.result = num
  }
  add (num){
    this.result += num
    return this
  }
  substract (num){
    this.result -= num
    return this
  }
  multiply (num){
    this.result *= num
    return this
  }
  divide (num){
    this.result /= num
    return this
  }
  power (num){
    this.result = Math.pow(this.result, num)
    return this
  }
  root (num){
    this.result = Math.pow(this.result,(1/num))
    return this
  }
  pi (){
    this.result *= Math.PI.toPrecision(4)
    return this
  }
  display (){
    console.log(this.result)
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
let calculate = new Calculator()

calculate.add(200).substract(2).multiply(10).divide(2).power(2).root(2).pi().display()

module.exports = {
  Calculator
}
