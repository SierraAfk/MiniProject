const daftar = document.getElementById("daftar");

daftar.addEventListener("click", function(e){
    if(e.target.classList.contains("hapus")){
        e.target.parentElement.remove();
    }
})

const tombol = document.getElementById("tombol");
const teks = document.getElementById("teks");

tombol.addEventListener("click", function(){
    if(teks.style.display === "none"){
        teks.style.display = "block";
        tombol.innerText = "sembunyikan";
    } else {
        teks.style.display = "none";
        tombol.innerText = "tampilkan";
    }
});

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