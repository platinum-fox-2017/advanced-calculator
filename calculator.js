'use strict'

class Calculator {
  //write your code here
  constructor (number) {
      this.result = number;
  }

  add(num){
      if(typeof num=='object'){
          this.result += num.result;
      }
      else{
          this.result+=num;
      }
      return this;
  }

  substract(num){
      if(typeof num=='object'){
          this.result -= num.result;
      }
      else{
          this.result-=num;
      }
      return this;
  }

  multiply(num){
      if(typeof num=='object'){
          this.result *= num.result;
      }
      else{
          this.result*=num;
      }
      return this;
  }

  devide(num){
      if(typeof num=='object'){
          this.result /= num.result;
      }
      else{
          this.result/=num;
      }
      return this;
  }

  power(num){
      if(typeof num=='object'){
          this.result = Math.pow(num.result,num);;
      }
      else{
          this.result = Math.pow(this.result,num);;
      }
      return this;
  }

  root(num){
      if(typeof num=='object'){
          this.result = Math.pow(num.result,1/num);;
      }
      else{
          this.result = Math.pow(this.result,1/num);;
      }
      return this;
  }

  pi(){
      return Math.PI;
  }

  square () {
      if(typeof num=='object'){
          this.result = Math.pow(num.result,2);;
      }
      else{
          this.result = Math.pow(this.result,2);;
      }
  }

  squareRoot () {
      if(typeof num=='object'){
          this.result = Math.pow(num.result,0.5);;
      }
      else{
          this.result = Math.pow(this.result,0.5);;
      }
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
