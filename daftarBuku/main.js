const daftarBuku = JSON.parse(localStorage.getItem("daftarBuku")) || [
    {
        judul: "Atomic Habits",
        penulis: "James Clear",
        tahun: 2018,
    },
    {
        judul: "The Subtle Art of Not Giving a F#ck",
        penulis: "Mark Manson",
        tahun: 2016
    },
    {
        judul: "The Catcher in the Rye",
        penulis: "J.D Salinger",
        tahun: 1951,
    },
];

const daftarBukuElement = document.getElementById("daftarBuku");
// tampilkanBuku();

// tampilkan buku
function tampilkanBuku(bukuList = daftarBuku){
    daftarBukuElement.innerHTML = "";
    bukuList.forEach((buku, index) => {
        const li = document.createElement("li");
        
        const span = document.createElement("span");
        span.innerText = `${buku.judul} oleh ${buku.penulis} (${buku.tahun})`;

        li.appendChild(span)

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
const searchInput = document.getElementById("cariBuku");

// Event listener untuk input pencarian
searchInput.addEventListener("input", function(){
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBuku = daftarBuku.filter(buku => {
        return buku.judul.toLowerCase().includes(searchTerm) || buku.penulis.toLowerCase().includes(searchTerm);
    });
    tampilkanBuku();
});
searchInput.addEventListener("input", tampilkanBuku())
tampilkanBuku()
console.log(daftarBuku)