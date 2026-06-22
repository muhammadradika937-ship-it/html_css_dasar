const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Masukkan angka: ", function(input) {
    let angka = parseFloat(input);
    if (angka > 100) {
        console.log("Nilai kamu sempurna");
    }
    rl.close();
});