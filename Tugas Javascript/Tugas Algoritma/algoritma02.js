    const prompt = require('prompt-sync')({ sigint: true });
    let belanja = parseInt(prompt("Masukkan total belanja:"));
    let diskon = 0;
    let setelahDIskon = belanja;

    if (belanja > 100000) {
        diskon = belanja * 0.10;
        setelahDiskon = belanja - diskon;
    }

    console.log("Diskon: Rp" + diskon);
    console.log(" Total setelah diskon: Rp" + setelahDiskon)
