'use strict'

class Kalkulator{
  
  constructor(angkaAwal){
   this.hasil = angkaAwal || 0; 
   this.pi = 3.14;
  }
  tambah(newNum){
    if(newNum) {
      this.hasil += newNum;  
    } else {
      this.hasil += this.hasil;  
    }
    return this;
  }
  kurang(newNum){
    if(newNum) {
      this.hasil -= newNum;  
    } else {
      this.hasil -= this.hasil;  
    }
    return this;
  }
  kali(newNum){
    if(newNum) {
      this.hasil *= newNum;  
    } else {
      this.hasil *= this.hasil;  
    }
    return this;
  }
  bagi(newNum){
    if(newNum) {
      this.hasil /= newNum;  
    } else {
      this.hasil /= this.hasil;  
    }
    return this;
  }
  pangkat(newNum){
    var angkaKalian = this.hasil;
    for(var i = 1; i < newNum; i++){
      this.hasil = this.hasil * angkaKalian;  
    }
    return this;
  }
  akarPangkat(newNum){
    let angkaTerbesar = this.hasil;
    for(var j = 0; j < angkaTerbesar; j++){
      var angkaKalian = j;
      var hasilPangkat = j;
      for(var i = 1; i < newNum; i++){
        hasilPangkat = hasilPangkat * angkaKalian;  
      }
      if(hasilPangkat === this.hasil){
        this.hasil = j;  
        break;
      }
    }
    return this;
  }
  printHasil(){
    console.log(`Hasil Perhitungan : ${this.hasil}`);
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
  Kalkulator
}
