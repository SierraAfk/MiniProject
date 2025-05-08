const daftarBuku = JSON.parse(localStorage.getItem("daftarBuku")) || [
    {
        judul: "Atomic Habits",
        penulis: "James Clear",
        tahun: 2018,
        sudahDibaca: false
    },
    {
        judul: "The Subtle Art of Not Giving a F#ck",
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

const daftarBukuElement = document.getElementById("daftarBuku");
tampilkanBuku();

// tampilkan buku
function tampilkanBuku(bukuList = daftarBuku){
    daftarBukuElement.innerHTML = "";
    bukuList.forEach((buku, index) => {
        const li = document.createElement("li");
        
        const span = document.createElement("span");
        span.innerText = `${buku.judul} oleh ${buku.penulis} (${buku.tahun})`;

        if(buku.sudahDibaca){
            li.style.color = "green";
            li.style.textDecoration = "line-through"
        }

        // bikin checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = buku.sudahDibaca;
        checkbox.style.marginRight ="10px";
        checkbox.addEventListener("change", function(){
            const index = daftarBuku.findIndex(b => 
                b.judul === buku.judul &&
                b.penulis === buku.penulis &&
                b.tahun === buku.tahun
            );
            if (index !== -1){
                daftarBuku[index].sudahDibaca = checkbox.checked;
                localStorage.setItem("daftarBuku", JSON.stringify(daftarBuku));
            }
        });

        // tombol hapus
        const tombolHapus = document.createElement("button");
        tombolHapus.innerText = "Hapus";
        tombolHapus.addEventListener("click", function(){
            const index = daftarBuku.findIndex(b => 
                b.judul === buku.judul &&
                b.penulis === buku.penulis &&
                b.tahun === buku.tahun
            );

            if(index !== -1){
                daftarBuku.splice(index, 1);
                localStorage.setItem("daftarBuku", JSON.stringify(daftarBuku));
                tampilkanBuku();
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(tombolHapus);

        daftarBukuElement.appendChild(li);
    });
}

// tambah buku baru
// tangkap form beserta dengan input input nya
const formTambahBuku = document.getElementById("formBukuBaru")
const inputJudul = document.getElementById("inputJudul");
const inputPenulis = document.getElementById("inputPenulis");
const inputTahun = document.getElementById("inputTahun");

// event saat form disubmit
formTambahBuku.addEventListener("submit", function(event){
    event.preventDefault();

    // ambil nilai dari input
    const judulBaru = inputJudul.value.trim();
    const penulisBaru = inputPenulis.value.trim();
    const tahunBaru = parseInt(inputTahun.value.trim());
    
    // validasi sederhana
    if (judulBaru && penulisBaru && !isNaN(tahunBaru)){
        // buat objek buku baru
        const bukuBaru = {
            judul: judulBaru,
            penulis: penulisBaru,
            tahun: tahunBaru,
        };
    
        // masukkan data buku baru ke dalam daftar buku
        daftarBuku.push(bukuBaru);
        localStorage.setItem("daftarBuku", JSON.stringify(daftarBuku));
        
        // reset form
        formTambahBuku.reset();

        // tampilkan ulang daftar buku
        tampilkanBuku();
    } else {
        alert("Mohon isi semua field")
    };
});

// search buku
// ambil element input pencarian
const searchInput = document.getElementById("searchBuku");

const filterStatusRadios = document.querySelectorAll('input[name="filter"]');
// Event listener untuk input pencarian
searchInput.addEventListener("input", function(){
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBuku = daftarBuku.filter(buku => {
        return buku.judul.toLowerCase().includes(searchTerm) || buku.penulis.toLowerCase().includes(searchTerm);
    });
    filterDanTampilkan()
});
searchInput.addEventListener("input", filterDanTampilkan)

// filter buku
// event listener
filterStatusRadios.forEach(radio => {
    radio.addEventListener("change", filterDanTampilkan);
});


// update filter
function filterDanTampilkan(){
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
    tampilkanBuku(filtered)
}


console.log(daftarBuku);