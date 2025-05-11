const dataMahasiswa = [
    {nama: "Sopyan Habibi", umur: 19, jurusan: "Teknologi Informasi"},
    {nama: "Sierra Lia", umur: 21, jurusan: "Kedokteran"},
    {nama: "Lydia Ainsworth", umur: 20, jurusan: "Sistem Informasi"}
];

for (let mhs of dataMahasiswa){
    if (mhs.nama === nama){
        return mhs;

    } else {
        return "Mahasiswa tidak ditemukan";
    }
}