const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Masukkan kode 5 digit: ", function(kode) {
    if (kode === "78821") {
        console.log("you are authebticated");
    } else {
        console.log("You have no access");
    }
    rl.close();
});