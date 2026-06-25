const prompt = require('prompt-sync')({sigint: true});
let x = parseInt(prompt("Masukkan jarak dalam cm:"));
let km = Math.floor(x / 100000); x %= 100000;
let m = Math.floor(x / 100); x %= 100;
console.log(km + "km +" + m + "m" + x + "cm");