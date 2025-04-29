const daftarBuku = JSON.parse(localStorage.getItem("daftarBuku")) || [
    {
        judul: "Atomic Habits",
        penulis: "James Clear",
        tahun: 2018,
    },
    {
        judul: "The Subtle Art of Not Giving a F*ck",
        penulis: "Mark Manson",
        tahun: 2016,
    },
    {
        judul: "The Catcher in the Rye",
        penulis: "J.D Salinger",
        tahun: 1951,
    },
];

// Ambil elemen ul
const daftarBukuElement = document.getElementById("daftarBuku");
tampilkanBuku()

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
// tampilkan daftar buku
function tampilkanBuku(bukuList = daftarBuku) {
    daftarBukuElement.innerHTML = "";
    bukuList.forEach((buku, index) => {
        const li = document.createElement("li");
        
        // Bikin checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = buku.sudahDibaca;
        checkbox.style.marginRight = "10px";
        
        // Optional: checkbox.checked = buku.sudahDibaca || false;
        
        // Info buku
        const span = document.createElement("span");
        span.innerText = `${buku.judul} oleh ${buku.penulis} (${buku.tahun})`;
        
        if(buku.sudahDibaca){
            li.style.textDecoration = "line-through";
            li.style.color = "green"
        }
        // Tombol Hapus
        const tombolHapus = document.createElement("button");
        tombolHapus.innerText = "Hapus";
        tombolHapus.addEventListener("click", function () {
            hapusBuku(index);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(tombolHapus);

        daftarBukuElement.appendChild(li);
    });
}

// hapus buku
function hapusBuku(index) {
    daftarBuku.splice(index, 1); // Hapus 1 item berdasarkan index
    localStorage.setItem("daftarBuku", JSON.stringify(daftarBuku));
    tampilkanBuku(); // Tampilkan ulang daftar
};
// Tangkap form dan input-inputnya
const formTambahBuku = document.getElementById("formTambahBuku");
const inputJudul = document.getElementById("inputJudul");
const inputPenulis = document.getElementById("inputPenulis");
const inputTahun = document.getElementById("inputTahun");

// Event saat form disubmit
formTambahBuku.addEventListener("submit", function(event) {
    event.preventDefault(); // Supaya tidak reload halaman

    // Ambil nilai dari input
    const judulBaru = inputJudul.value.trim();
    const penulisBaru = inputPenulis.value.trim();
    const tahunBaru = parseInt(inputTahun.value.trim());

    // Validasi sederhana
    if (judulBaru && penulisBaru && !isNaN(tahunBaru)) {
        // Buat objek buku baru
        const bukuBaru = {
            judul: judulBaru,
            penulis: penulisBaru,
            tahun: tahunBaru,
            sudahDibaca: false,
        };

        // Tambahkan ke daftarBuku
        daftarBuku.push(bukuBaru);
        localStorage.setItem("daftarBuku", JSON.stringify(daftarBuku));


        // Reset form
        formTambahBuku.reset();

        // Render ulang daftar buku
        tampilkanBuku();
    } else {
        alert("Mohon isi semua kolom dengan benar!");
    };
    
});
