const mahasiswa = [
    { nama: "Sopyan Habibi", umur: 19, jurusan: "Teknologi Informasi", ipk: 4.0 },
    { nama: "Sierra Lia", umur: 21, jurusan: "Kedokteran", ipk: 4.0 },
    { nama: "Lydia Ainsworth", umur: 20, jurusan: "Kedokteran", ipk: 3.8 },
];

function cariMahasiswa(keyword) {
    const hasil = mahasiswa.filter(mhs =>
        mhs.nama.toLowerCase().includes(keyword.toLowerCase()) ||
        mhs.jurusan.toLowerCase().includes(keyword.toLowerCase())
    );
    return hasil.length > 0 ? hasil : "Mahasiswa tidak ditemukan";
}

function tambahMahasiswa(nama, umur, jurusan, ipk){
    const mahasiswaBaru = {
        nama: nama,
        umur: umur,
        jurusan: jurusan,
        ipk: ipk
    };
    mahasiswa.push(mahasiswaBaru);
}
function hapusMahasiswa(nama){
    const index = mahasiswa.findIndex(data => data.nama.toLowerCase() === nama.toLowerCase());
    
    if (index !== -1){
        mahasiswa.splice(index, 1);
        console.log(`Mahasiswa dengan nama ${nama} telah di hapus`);
    } else {
        console.log("Mahasiswa tidak ditemukan")
    }
}
function updateMahasiswa(nama, dataBaru) {
    const index = mahasiswa.findIndex(m => m.nama.toLowerCase() === nama.toLowerCase());

    if (index !== -1) {
        // update properti dengan cara looping isi dari object dataBaru
        for (let key in dataBaru) {
            mahasiswa[index][key] = dataBaru[key];
        }
        console.log(`Data ${nama} berhasil diperbarui.`);
    } else {
        console.log("Mahasiswa tidak ditemukan");
    }
}
function statistikMahasiswa(){
    // total jumlah mahasiswa
    const totalMahasiswa = mahasiswa.length;
    // rata rata ipk
    let totalIpk = 0;
    for (let data of mahasiswa){
        totalIpk += data.ipk;
    }
    const rata2 = totalIpk / totalMahasiswa;
    // mahasiswa per jurusan
    let totalJurusan = {};
    for (let data of mahasiswa){
        if (!totalJurusan[data.jurusan]){
            totalJurusan[data.jurusan] = 1;
        } else {
            totalJurusan[data.jurusan]++;
        }
    }
    const hasil = {
        totalMahasiswa: totalMahasiswa,
        rataRataIpk: rata2.toFixed(2),
        totalJurusan: totalJurusan
    };
    return hasil;
}

function main(){
    console.log(cariMahasiswa("lia"))
    tambahMahasiswa("Astrophel", 21, "Sistem Informasi", 3.9);
    hapusMahasiswa("Lydia Ainsworth");
    updateMahasiswa("Sierra Lia", {umur: 22, jurusan: "Teknologi Informasi"});
    console.log(statistikMahasiswa());
    console.log(cariMahasiswa("Kedokteran"));
    console.table(mahasiswa)
}