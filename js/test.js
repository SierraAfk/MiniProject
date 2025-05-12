// const daftar = document.getElementById("daftar");

// daftar.addEventListener("click", function(e){
//     if(e.target.classList.contains("hapus")){
//         e.target.parentElement.remove();
//     }
// })

// const tombol = document.getElementById("tombol");
// const teks = document.getElementById("teks");

// tombol.addEventListener("click", function(){
//     if(teks.style.display === "none"){
//         teks.style.display = "block";
//         tombol.innerText = "sembunyikan";
//     } else {
//         teks.style.display = "none";
//         tombol.innerText = "tampilkan";
//     }
// });

// forEach
const nama = ["pian", "lia", "sierra", "nila"];
nama.forEach(function(data, index){
    console.log(`${index + 1}. ${data}`)
})

// map
const akhir = nama.map(function(ubah){
    return ubah.toUpperCase();
});
console.log(akhir)

// filter
const angka = [3, 10, 12, 7, 22, 5, 13];
const besar = angka.filter(a => a > 10)
console.log(besar)

// another filter
const namaTeman = ["Sopyan", "Lia", "Putri", "Ahmad", "Jo", "Dian", "Alexander"];
const filter = namaTeman.filter(nama => nama.length > 4);
console.log(filter)

// find
const produk = [
  { nama: "Laptop", harga: 8000 },
  { nama: "Mouse", harga: 150 },
  { nama: "Keyboard", harga: 300 },
  { nama: "Monitor", harga: 2500 }
];

const temukan = produk.find(h => h.harga > 500);
console.log(temukan)

// another find
const buku = [
  { judul: "Laut Bercerita", penulis: "Leila S. Chudori" },
  { judul: "Bumi", penulis: "Tere Liye" },
  { judul: "Pulang", penulis: "Tere Liye" },
  { judul: "Perahu Kertas", penulis: "Dee Lestari" }
];

const tereLiye = buku.find(b => b.penulis === "Tere Liye");
console.log(tereLiye)

// some and every
const nilai = [70, 85, 90, 45];
const adaYangTidakLulus = nilai.some(n => n < 60);
const lulusGaYa = nilai.every(n => n >= 60);
console.log(adaYangTidakLulus);
console.log(lulusGaYa);

const usia = [20, 18, 31, 46, 16, 17, 25];
const diBawahUmur = usia.some(u => u < 18);
console.log(diBawahUmur);
const sudahDewasa = usia.every(u => u >= 18);
console.log(sudahDewasa);

// reduce
const nomor = [5, 8, 12, 20, 7];
const total = nomor.reduce((acc, curr)=> acc + curr, 0);
console.log(total)

// sort
const angkaAcak = [45, 12, 78, 5, 89, 21];
angkaAcak.sort((a, b) => a - b);
console.log(angkaAcak)

// Object Distructuring
const film = {
    judul: "Interstellar",
    sutradara: "Cristopher Nolan",
    tahun: 2014
};
const {judul, sutradara, tahun} = film;
console.log(judul)
console.log(sutradara)
console.log(tahun)

// file: main.js
import * as Utils from './utils.js';

console.log(Utils.PI); // 3.14
console.log(Utils.luasLingkaran(7));
