const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

rl.question("Masukkan panjang:",function(p) {
    rl.question("Masukkan lebar:",function(l) {
        let panjang = parseFloat(p);
        let lebar = parseFloat(l);
        let luas = panjang * lebar;
        let keliling = 2 * (panjang + lebar);
        console.log("Luas:" + luas);
        console.log("keliling:" + keliling);
        rl.close();
});
});