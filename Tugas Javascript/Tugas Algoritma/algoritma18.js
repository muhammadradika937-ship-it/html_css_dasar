let nilai = 78;
let indeks;

if (nilai >= 80) {
    indeks = "A";
} else if (nilai >= 70) {
    indeks = "B";
} else if (nilai >= 55) {
    indeks = "C";
} else if (nilai >= 40) {
    indeks = "D";
} else {
    indeks = "E";
}

console.log("Nilai :", nilai);
console.log("Indeks :", indeks);