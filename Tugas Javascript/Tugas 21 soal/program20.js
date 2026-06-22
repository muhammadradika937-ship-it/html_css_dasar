const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question("Masukkan satu huruf (A-Z): ", function(input) {
    let huruf = input.trim().toUpperCase();
    let vokal = ['A','E','I','O','U'];
    let alfabet = /^[A-Z]$/;

    if (!alfabet.test(huruf)) {
        console.log("Bukan berupa huruf");
    } else if (vokal.includes(huruf)) {
        console.log(huruf + " adalah huruf Vokal");
    } else {
        console.log(huruf + " adalah huruf Konsonan");
    }
    rl.close();
});