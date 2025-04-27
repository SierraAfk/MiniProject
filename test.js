const dataMahasiswa = [
    {nama: "Sopyan Habibi", umur: 19, jurusan: "Teknologi Informasi"},
    {nama: "Sierra Lia", umur: 21, jurusan: "Kedokteran"},
    {nama: "Lydia Ainsworth", umur: 20, jurusan: "Sistem Informasi"}
];

function cariMahasiswa(nama){
    for (let mhs of dataMahasiswa){
        if (mhs.nama === nama){
            return mhs;
        }
    }
    return "Mahasiswa tidak ditemukan";
}
console.log(cariMahasiswa("Sopyan Habibi"))
// console.log(`Nama: ${mhs.nama}`);
// console.log(`Umur: ${mhs.umur}`);
// console.log(`Jurusan: ${mhs.jurusan}`);