const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Masukkan nama:", function(nama) {
    console.log("Apakabar" + nama + "? Wish you luck!");
    rl.close();
});