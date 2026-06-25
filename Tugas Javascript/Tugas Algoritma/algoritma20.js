const prompt = require('prompt-sync')({sigint: true});
let jamKerja = parseInt(prompt("Masukkan jumlah jam kerja selama seminggu:"));

let upahNormal = 2000;
let upahLembur = 3000;
let totalUpah;

if (jamKerja <= 48) {
    totalUpah = jamKerja * upahNormal;
} else {
    let lembur = jamKerja - 48;
    totalUpah = (48 * upahNormal) + (lembur * upahLembur);
}

console.log("Total upah mingguan = Rp" + totalUpah);