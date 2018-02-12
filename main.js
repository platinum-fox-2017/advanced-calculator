'use strict'

const {Kalkulator} = require("./calculator.js")

// execute function on calculator.js in here
let kalkulator = new Kalkulator();
kalkulator.tambah(4).pangkat(3).akarPangkat(3).kali(2).kurang(1).bagi(2).printHasil();
