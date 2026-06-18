const readline = require('readline');
const readline = require('readline');

rl.question("Masukkan jari-jari bola:",function(r) {
    let jarijari = parseFloat(r);
    let volume = (4/3)* Math.PI * Math.pow(jarijari,3);
    let luasPermukaan = 4 * Math.PI * Math.pow(jarijari,2);
    console.log("Volume Bola :"+ volume.toFixed(2));
    console.log("Luas Permukaan:"+ luasPermukaan.toFixed(2));
    rl.close();
});