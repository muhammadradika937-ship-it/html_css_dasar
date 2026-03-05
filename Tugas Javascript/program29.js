function cekGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "Ganjil";
    }
}

console.log(cekGenap(7));