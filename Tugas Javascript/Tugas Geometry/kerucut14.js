let rKerucut = 3;
let tKerucut = 4;

let garisPolukis = Math.sqrt(rKerucut * rKerucut + tKerucut * tKerucut);

let volumeKerucut = (1/3) * Math.PI * rKerucut * rKerucut * tKerucut;
let luasPermukaanKerucut = Math.PI * rKerucut * (rKerucut + garisPolukis);

console.log("Garis polukis:", garisPolukis);
console.log("Volume Kerucut:", volumeKerucut.toFixed(2));
console.log("Luas Permukaan Kerucut:", luasPermukaanKerucut.toFixed(2));