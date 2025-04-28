<<<<<<< HEAD
const tugas = [
    {judul: "Belajar JavaScript", selesai: false},
    {judul: "Push-up 30x", selesai: true},
    {judul: "Minum air putih", selesai: false},
];

function tampilkanTugas(){
    for (let i = 0; i < tugas.length; i++) {
        const data = tugas[i];
        const hasil = data.selesai ? "✅" : "❌";
        console.log(`${i + 1}. ${data.judul} ${hasil}`);
    }
}
// tambah tugas
function tambahTugas(judul){
    const tugasBaru = {
        judul: judul,
        selesai: false,
    };
    tugas.push(tugasBaru)
}
// tandai tugas
function tandaiSelesai(judul) {
    const tugasDitemukan = tugas.find(data => data.judul.toLowerCase() === judul.toLowerCase());

    if (tugasDitemukan) {
        tugasDitemukan.selesai = true;
        console.log(`Tugas "${judul}" telah ditandai sebagai selesai`);
    } else {
        console.log("Tugas tidak ditemukan");
    };
};
// hapus tugas
function hapusTugas(judul){
    const index = tugas.findIndex(data => data.judul.toLowerCase() === judul.toLowerCase());

    if (index !== -1){
        tugas.splice(index, 1);
        console.log(`Tugas "${judul}" berhasil dihapus`);
    } else {
        console.log("Tugas tidak ditemukan");
    };
};
// cari tugas
function cariTugas(keyword) {
    const hasil = tugas.filter(data => data.judul.toLowerCase().includes(keyword.toLowerCase()));

    if (hasil.length > 0) {
        for (let tugasDitemukan of hasil) {
            const status = tugasDitemukan.selesai ? "✅" : "❌";
            console.log(`${tugasDitemukan.judul} ${status}`);
        }
    } else {
        console.log("Tugas tidak ditemukan");
    }
}
// main
function main(){
    tampilkanTugas();
    tambahTugas("Mengerjakan PR");
    tandaiSelesai("Minum air putih");
    hapusTugas("Push-up 30x");
    cariTugas("belajar");
    tampilkanTugas();
}
main()
=======
const tugas = [
    {judul: "Belajar JavaScript", selesai: false},
    {judul: "Push-up 30x", selesai: true},
    {judul: "Minum air putih", selesai: false},
];

function tampilkanTugas(){
    for (let i = 0; i < tugas.length; i++) {
        const data = tugas[i];
        const hasil = data.selesai ? "✅" : "❌";
        console.log(`${i + 1}. ${data.judul} ${hasil}`);
    }
}
// tambah tugas
function tambahTugas(judul){
    const tugasBaru = {
        judul: judul,
        selesai: false,
    };
    tugas.push(tugasBaru)
}
// tandai tugas
function tandaiSelesai(judul) {
    const tugasDitemukan = tugas.find(data => data.judul.toLowerCase() === judul.toLowerCase());

    if (tugasDitemukan) {
        tugasDitemukan.selesai = true;
        console.log(`Tugas "${judul}" telah ditandai sebagai selesai`);
    } else {
        console.log("Tugas tidak ditemukan");
    };
};
// hapus tugas
function hapusTugas(judul){
    const index = tugas.findIndex(data => data.judul.toLowerCase() === judul.toLowerCase());

    if (index !== -1){
        tugas.splice(index, 1);
        console.log(`Tugas "${judul}" berhasil dihapus`);
    } else {
        console.log("Tugas tidak ditemukan");
    };
};
// cari tugas
function cariTugas(keyword) {
    const hasil = tugas.filter(data => data.judul.toLowerCase().includes(keyword.toLowerCase()));

    if (hasil.length > 0) {
        for (let tugasDitemukan of hasil) {
            const status = tugasDitemukan.selesai ? "✅" : "❌";
            console.log(`${tugasDitemukan.judul} ${status}`);
        }
    } else {
        console.log("Tugas tidak ditemukan");
    }
}
// main
function main(){
    tampilkanTugas();
    tambahTugas("Mengerjakan PR");
    tandaiSelesai("Minum air putih");
    hapusTugas("Push-up 30x");
    cariTugas("belajar");
    tampilkanTugas();
}
main()
>>>>>>> 4ebe28f (progress membuat aplikasi daftar buku)
