const readline = require('readline');
const rl = readline.createInterface({input:process.stdin, output:process.stdout});

rl.question("Jumlah siswa X RPL 1:", function(rpl1) {
    rl.question("Jumlah siswa X RPL 2:", function(rpl2) {
        rl.question("Jumlah siswa X TKJ 1:", function(tkj1) { 
            rl.question("Jumlah siswa X TKJ 2:", function(tkj2) {
                let total = parseInt(rpl1) + parseInt(rpl2) + parseInt(tkj1) + parseInt(tkj2);
                console.log("Total semua siswa :" + total);
            });
        });
    });
});