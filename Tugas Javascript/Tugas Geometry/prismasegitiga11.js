let aLastPrisma = 6;
let tinggiSegi = 4;
let tinggiPrisma = 10;
let s1Prisma = 5, s2Prisma = 5, s3Prisma = 6;

let luasAlasPrisma = (aLastPrisma * tinggiSegi) / 2;
let kelilingAlasPrisma = s1Prisma + s2Prisma + s3Prisma;

let volumePrisma = luasAlasPrisma * tinggiPrisma;
let luasPermukaanPrisma = (2 * luasAlasPrisma) + (kelilingAlasPrisma * tinggiPrisma);

console.log("Volume Prisma Segitiga:", volumePrisma);
console.log("Luas Permukaan Prisma Segitiga:", luasPermukaanPrisma);