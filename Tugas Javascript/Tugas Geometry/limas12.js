let sisiLimas = 6;
let tinggiLimas = 4;
let tinggiSisiTegak = 5;

let volumeLimas = (1/3) * sisiLimas * sisiLimas * tinggiLimas;
let luasAlasLimas = sisiLimas * sisiLimas;
let luasSisiTegak = 4 * ((sisiLimas * tinggiSisiTegak) / 2);
let luasPermukaanLimas = luasAlasLimas + luasSisiTegak;

console.log("Volume Limas:", volumeLimas);
console.log("LuasPermukaan Limas:", luasPermukaanLimas);