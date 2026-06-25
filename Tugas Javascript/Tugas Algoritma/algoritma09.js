const prompt = require('prompt-sync')({sigint: true});
let beratBadan = parseInt(prompt("Masukkan berat badan (kg):"));
let tinggiBadan = parseInt(prompt("Masukkan tinggi badan (cm):"));

let beratIdeal = tinggiBadan - 100 - (0.1 * (tinggBadan - 100));

if (Math.abd(beratBadan - beratIdeal) <= 2) {
    console.log("Ideak (berat ideal: " + beratIdeal.toFixed(1) + "kg)");  
} else {
    console.log("Tidak Ideal (berat ideal: " + beratIdeal.toFixed(1) + "kg)");
}