const prompt = require('prompt-sync')({sigint: true});
let nama = "Bayu";
let golongan = "B";
let jamKerja = 55;

let upahPerJam;
let gaji;

if (golongan === "A") {
    upahPerJam = 4000;
} else if (golongan === "B") {
    upahPerJam = 5000;
} else if (golongan === "C") {
    upahPerJam = 6000;
} else if (golongan === "D") {
    upahPerJam = 7500;
} else {
    console.log("Golongan tidak valid");
}

if (jamKerja > 48) {
    let lembur = jamKerja - 48;
    gaji = (48 * upahPerJam) + (lembur * 3000);
} else {
    gaji = jamKerja * upahPerJam;
}

console.log("Nama :", nama);
console.log("Golongan :", golongan);
console.log("Gaji Mingguan : Rp" + gaji);