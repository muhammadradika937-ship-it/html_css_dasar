const prompt = require('prompt-sync')({sigint: true});
let belanja = parseInt(prompt("Masukkan nilai belanja (integer): "));
let pecahan = [25,50,100];
let hasilBulat = belanja;

for (let p of pecahan) {
    let sisa = belanja % p;
    if (sisa !== 0) {
        hasilBulat = belanja -sisa;
        break;
    }
}

console.log("Nilai dibulatkan: Rp" + hasilBulat);