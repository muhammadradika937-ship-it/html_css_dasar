const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Masukkan bilangan bulat: ", function(input) {
    let angka = parseInt(input);
    if (angka % 7 === 0) {
        console.log(angka + "adalah kelipatan 7");
    } else {
        console.log("Anda belum beruntung");
    }
    rl.close();
});
