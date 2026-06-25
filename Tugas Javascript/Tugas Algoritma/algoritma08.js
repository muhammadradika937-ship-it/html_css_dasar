const prompt = require('prompt-sync')({sigint: true});
let pixel = parseInt(prompt("Masukkan nilai hasil operasi pixel:"));

if (pixel > 255) pixel = 255;
if (pixel < 0) pixel = 0;

console.log("Nilai setelah clipping: " + pixel);