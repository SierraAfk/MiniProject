const mahasiswa = [
    { nama: "Sopyan Habibi", umur: 19, jurusan: "Teknologi Informasi", ipk: 4.0 },
    { nama: "Sierra Lia", umur: 21, jurusan: "Kedokteran", ipk: 4.0 },
    { nama: "Lydia Ainsworth", umur: 20, jurusan: "Kedokteran", ipk: 3.8 },
    { nama: "Rafael Yunus", umur: 22, jurusan: "Teknologi Informasi", ipk: 3.5 }
];

// 🔎 a. Cari Mahasiswa berdasarkan nama
function cariMahasiswa(nama) {
    const hasil = mahasiswa.find(mhs => mhs.nama.toLowerCase() === nama.toLowerCase());
    return hasil ? hasil : "Mahasiswa tidak ditemukan";
}

// 🎯 b. Filter Mahasiswa berdasarkan jurusan
function filterJurusan(jurusan) {
    return mahasiswa.filter(mhs => mhs.jurusan.toLowerCase() === jurusan.toLowerCase());
}

// 🏆 c. Ranking berdasarkan IPK
function rankingIPK() {
    const hasil = [...mahasiswa].sort((a, b) => b.ipk - a.ipk);
    console.log("Ranking IPK Mahasiswa:");
    hasil.forEach((mhs, i) => {
        console.log(`${i + 1}. ${mhs.nama} - IPK: ${mhs.ipk}`);
    });
}

// 🔁 Contoh Penggunaan
console.log(cariMahasiswa("sierra lia"));
console.log(filterJurusan("kedokteran"));
rankingIPK();