    const prompt = require('prompt-sync')({ sigint: true});
    let a = parseInt(prompt("Masukkan bilangan 1:"));
    let b = parseInt(prompt("Masukkan bilangan 2:"));
    let c = parseInt(prompt("Masukkan bilangan 3:"));


let arr = [a, b, c];
arr.sort((x, y) => x - y);

console.log("Urutan: " + arr[0] + "," + arr[2]);
