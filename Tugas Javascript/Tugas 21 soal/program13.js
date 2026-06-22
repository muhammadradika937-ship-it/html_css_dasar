const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output:process.stdout });

rl.question("Harga makanan:", function(input) {
    let harga = parseFloat(input);
    let pajak = harga * 0.10;
    let fee = harga * 0.05;
    let totalBayar = harga + pajak + fee;
    console.log("Harga makanan: " + harga);
    console.log("Pajak: " + pajak);
    console.log("Fee: " + fee);
    console.log("harga bayar: " + totalbayar);
    rl.close();
});