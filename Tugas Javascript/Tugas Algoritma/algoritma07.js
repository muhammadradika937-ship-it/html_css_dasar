const prompt = require('prompt-sync')({sigint: true});
let n = parseInt(prompt("Masukkan bilangan 1-10:"));
const romawi = ["", "I","II","III","IV","V","VI","VII","VIII","IX","X"];
if (n >= 1 && n <= 10) {
    console.log("Romawi: " + romawi[n]);
} else {
    console.log("Di luar rentang!");
}

let = parseInt(prompt("MAsukkan bilangann bulat positif:"));
const nilai = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
const simbol = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
let hasil = "";
for (let i = 0; i < nilai.length; i++) {
    while (n >= nilai[i]) {
        hasil += simbol[i];
        n -= nilai[i];
    }
}