const prompt = require('prompt-sync')({sigint: true});
let totalDetik = parseInt(prompt("Masukkan durasi dalam detik:"));
let hari = Math.floor(totalDetik / 86400);
totalDetik %= 86400;
let jam = Math.floor(totalDetik / 3600);
totalDetik %= 3600;
let menit = Math.floor(totalDetik / 60);
let detik = totalDetik % 60;
console.log(hari + " hari," + jam + "jam," + menit + "menit," + detik + "detik");