const prompt = require('prompt-sync')({sigint: true})
  let x = parseInt(prompt("Masukkan jumlah hari proyek:"));
  let tahun = Math.floor(x / 365);
  x %= 365;
  let bulan = Math.floor(x / 30);
  let hari = x % 30;
  console.log(tahun + " tahun, " + bulan + " bulan, " + hari + " hari");
