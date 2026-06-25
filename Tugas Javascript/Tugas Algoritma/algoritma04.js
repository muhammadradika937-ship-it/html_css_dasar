const prompt = require('prompt-sync')({sigint: true});
let a = parseInt(prompt("Sisi a:"));
let b = parseInt(prompt("Sisi b:"));
let c = parseInt(prompt("sisi b:"));

let c2 = c * c;
let ab2 = a * a + b * b;

if (ab2 === c2) {
    console.log("Segitiga Siku-Siku");
} else if (ab2 > c2) {
    console.log("Segitiga Lancip");
} else {
    console.log("Segitiga Tumpul");
}