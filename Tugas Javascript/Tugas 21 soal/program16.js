const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Masukkan juara (1/2/3): ", function(input) {
    let juara = parseInt(input);
    if (juara === 1) {
        console.log("Selamat Anda Juara Utama");
    } else if (juara === 2) {
        console.log("Selamat Anda Runner Up");
    } else if (juara === 3) {
        console.log("Selamat Anda Juara Ketiga");
    } else {
        console.log("Inputan Anda Salah");
    }
    rl.close();
});