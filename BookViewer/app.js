const daftarBuku = [
    {
        judul: "Atomic Habits",
        penulis: "James Clear",
        tahun: 2018
    },
    {
        judul: "The Subtle Art of Not Giving a F*ck",
        penulis: "Mark Manson",
        tahun: 2016
    },
    {
        judul: "The Catcher in the Rye",
        penulis: "J.D Salinger",
        tahun: 1951
    }
];

// Ambil elemen ul
const daftarBukuElement = document.getElementById("daftarBuku");

// Looping daftarBuku dan buat li untuk setiap buku
daftarBuku.forEach(buku => {
    const li = document.createElement("li");
    li.innerText = `${buku.judul} oleh ${buku.penulis} (${buku.tahun})`;
    daftarBukuElement.appendChild(li);
});

// ambil elemen input pencarian
const searchInput = document.getElementById("searchBuku");

// Event listener untuk input pencarian
searchInput.addEventListener("input", function(){
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBuku = daftarBuku.filter(buku => {
        return buku.judul.toLowerCase().includes(searchTerm) || buku.penulis.toLowerCase().includes(searchTerm);
    });
    tampilkanBuku(filteredBuku);
});

// fungsi untuk menampilkan daftar buku
function tampilkanBuku(bukuList){
    daftarBukuElement.innerHTML = "";
    bukuList.forEach(buku => {
        const li = document.createElement("li");
        li.innerText = `${buku.judul} oleh ${buku.penulis} tahun ${buku.tahun}`;
        daftarBukuElement.appendChild(li)
    })
}


console.log(daftarBuku)