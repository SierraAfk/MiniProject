const daftarBuku = JSON.parse(localStorage.getItem("daftarBuku")) || [
    {
        judul: "Atomic Habits",
        penulis: "James Clear",
        tahun: 2018,
        sudahDibaca: false
    },
    {
        judul: "The Subtle Art of Not Giving a F*ck",
        penulis: "Mark Manson",
        tahun: 2016,
        sudahDibaca: false
    },
    {
        judul: "The Catcher in the Rye",
        penulis: "J.D Salinger",
        tahun: 1951,
        sudahDibaca: false
    },
];

// Ambil elemen ul
const daftarBukuElement = document.getElementById("daftarBuku");
tampilkanBuku();
// tampilkan daftar buku
function tampilkanBuku(bukuList = daftarBuku) {
    daftarBukuElement.innerHTML = "";
    bukuList.forEach((buku, index) => {
        const li = document.createElement("li");
        
        // Bikin checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = buku.sudahDibaca || false;
        checkbox.style.marginRight = "10px";
        checkbox.addEventListener("change", function(){
            // temukan index sebenarnya
            const realIndex = daftarBuku.findIndex(b => 
                b.judul === buku.judul &&
                b.penulis === buku.penulis &&
                b.tahun === buku.tahun
            );
            if (realIndex !== -1){
                daftarBuku[realIndex].sudahDibaca = checkbox.checked;
                localStorage.setItem("daftarBuku", JSON.stringify(daftarBuku));
            }
        });  
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
            const realIndex = daftarBuku.findIndex(b => 
                b.judul === buku.judul &&
                b.penulis === buku.penulis &&
                b.tahun === buku.tahun
            );
            if (realIndex !== -1){
                daftarBuku.splice(realIndex, 1);
                localStorage.setItem("daftarBuku", JSON.stringify(daftarBuku));
                filterDanTampilkan()  // refresh tampilan sesuai filter
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(tombolHapus);

        daftarBukuElement.appendChild(li);
    });
}

// ambil elemen input pencarian
const searchInput = document.getElementById("searchBuku");
// filter
const filterStatusRadios = document.querySelectorAll('input[name="filter"]');

// Event listener untuk input pencarian
searchInput.addEventListener("input", function(){
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBuku = daftarBuku.filter(buku => {
        return buku.judul.toLowerCase().includes(searchTerm) || buku.penulis.toLowerCase().includes(searchTerm);
    });
    filterDanTampilkan();
});
searchInput.addEventListener("input", filterDanTampilkan);

filterStatusRadios.forEach(radio => {
    radio.addEventListener("change", filterDanTampilkan);
});

// loop
filterStatusRadios.forEach(radio => {
    radio.addEventListener("change", () => {
        filterDanTampilkan();
    });
});

// fungsi baru untuk menggabungkan filter judul dan status baca
function filterDanTampilkan() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedFilter = document.querySelector('input[name="filter"]:checked').value;

    let filtered = daftarBuku.filter(buku => {
        const cocokJudul = buku.judul.toLowerCase().includes(searchTerm) || buku.penulis.toLowerCase().includes(searchTerm);
        const cocokStatus =
            selectedFilter === "semua" ? true :
            selectedFilter === "sudah" ? buku.sudahDibaca :
            !buku.sudahDibaca;
        return cocokJudul && cocokStatus;
    });

    tampilkanBuku(filtered);
}
// hapus buku
function hapusBuku(index) {
    daftarBuku.splice(index, 1); // Hapus 1 item berdasarkan index
    localStorage.setItem("daftarBuku", JSON.stringify(daftarBuku));
    filterDanTampilkan(); // Tampilkan ulang daftar
};

// Tambah Buku
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
        filterDanTampilkan();
    } else {
        alert("Mohon isi semua kolom dengan benar!");
    };
    
});
