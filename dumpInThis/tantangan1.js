const mahasiswa = [
    {nama: "Sopyan Habibi", umur: 19, jurusan: "Teknologi Informasi", ipk: 4.0},
    {nama: "Sierra Lia", umur: 21, jurusan: "Kedokteran", ipk: 4.0},
    {nama: "Lydia Ainsworth", umur: 20, jurusan: "Kedokteran", ipk: 3.8}
]

function search(keyword){
    for (let data of mahasiswa){
        let hasil = mahasiswa.filter(data => data.nama.toLowerCase().includes(keyword.toLowerCase()) ||
        data.jurusan.toLowerCase().includes(keyword.toLowerCase()));

        if (hasil.length === 0){
            return "Mahasiswa tidak ditemukan";
        }
        hasil.sort((a, b) => b.ipk - a.ipk);
        return hasil;
    }
}
console.log(search("Sierra Lia"));