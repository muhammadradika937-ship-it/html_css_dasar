function soal1() {
    let n = parseInt(prompt("Masukkan bilangan positif"));
    if (n % 4 === 0) {
        console.log(n + "adalah kelipatan 4");
    } else {
        console.log(n + " bukan kelipatan 4");
    }
}