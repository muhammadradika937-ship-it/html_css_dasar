const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question("Judul Buku:",function(judul) {
    rl.question("Penerbit:",function(Penerbit) {
        rl.question("jumlah Buku:",function(jumlah) {
            rl.question("Tanggal Pembelian:",function(Tanggal) {
                console.log("Judul Buku:" + judul);
                console.log("Penerbit:" + penerbit);
                console.log("Jumlah Buku:" + jumlah);
                console.log("Tanggal Pembelian:" + tanggal);
                rl.close();
            });
        });
    });
});