const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question("Masukkan x: ", function(inputX) {
    rl.question("Masukkkan y: ", function(inputY) {
        rl.question("MAsukkan z: ", function(inputZ) {
            let x = parseInt(inputX);
            let y = parseInt(inputY);
            let z = parseInt(inputZ);
            console.log("Nilai terbesar: " + Math.max(x,y,z));
            console.log("Nilai terkecil: " + Math.min(x,y,z));
            rl.close();
        });
    });
});