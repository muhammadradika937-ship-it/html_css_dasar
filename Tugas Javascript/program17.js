const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Total harga barang: ", function(input) {
    let harga = parseFloat(input);
    if (harga >= 200000) {
        let diskon = harga * 0.075;
        let totalBayar = harga - diskon;
        console.log("Diskon : " + diskon);
        console.log("total bayar : " + totalBayar);
    } else {
        console.log("Tidak mendapatkan diskon");
        console.log("Total bayar : " + harga);
    }
    rl.close();
});