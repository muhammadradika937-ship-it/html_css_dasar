const prompt = require('prompt-sync')({sigint: true});
let tinggi = parseFloat(prompt("Masukkan tinggi badan (cm):"));
let step1 = tinggi - 100;
let step2 = step1 - (0.1 *step1);
console.log("Berat badan ideal: " + step2.toFixed(2) + "kg");