<<<<<<< HEAD
const contact = [
    {
        nama: "Sopyan Habibi",
        noHP: "081234567",
        email: "spnhabib@test.com"
    },
    {
        nama: "Sierra Lia",
        noHP: "09987654334",
        email: "sierraLia1@test.com"
    },
    {
        nama: "Luna Evangeline",
        noHP: "08561234123",
        email: "lunaeva@test.com"
    },
    {
        nama: "Damian Alric",
        noHP: "08222333444",
        email: "damian.alric@test.com"
    },
    {
        nama: "Celeste Mavina",
        noHP: "08999988777",
        email: "celestemav@test.com"
    },
    {
        nama: "Finnian Drake",
        noHP: "08765432100",
        email: "finndrake@test.com"
    }
];
// show contact
function tampilkanData(){
    for (let data of contact){
        contact.sort((a, b) => b.nama - a.nama);
        console.log(`nama: ${data.nama}`);
        console.log(`No. HP: ${data.noHP}`);
        console.log(`email: ${data.email}`);
    }
}
// add contact
function tambahKontak(nama, noHP, email){
    const kontakBaru = {
        nama: nama,
        noHP: noHP,
        email: email
    }
    contact.push(kontakBaru);
    console.log(`Kontak dengan nama "${nama}" berhasil ditambah!`);
}
// search contact
function cariKontak(keyword){
    const hasil = contact.filter(data => data.nama.toLowerCase().includes(keyword.toLowerCase()));

    return hasil.length > 0 ? hasil : "Kontak tidak ditemukan"
    
}
// search contact by initial
function cariKontakByInitial(inisial){
    const huruf = inisial.toUpperCase()
    const hasil = contact.filter(data => data.nama[0].toUpperCase() === huruf);


    if(hasil.length > 0){
        console.log(`Kontak dengan inisial ${huruf}:`)
        hasil.forEach(data => {
            console.log(`- ${data.nama}`); 
        });
    } else {
        console.log(`Kontak dengan inisial ${huruf} tidak ada`)
    }
}
// delete contact
function hapusKontak(nama){
    const index = contact.findIndex(data => data.nama.toLowerCase() === nama.toLowerCase());

    if (index !== -1){
        contact.splice(index, 1);
        console.log(`Kontak "${nama}" berhasil dihapus`);
    } else {
        console.log(`Kontak "${nama}" tidak ditemukan`)
    }
}
// update contact
function updateKontak(nama, dataBaru){
    const index = contact.findIndex(data => data.nama.toLowerCase() === nama.toLowerCase());

    if (index !== -1){
        for (let key in dataBaru){
            contact[index][key] = dataBaru[key];
        }
        console.log(`Data "${nama}" berhasil diubah`);
    } else {
        console.log(`Data tidak ditemukan`);
    }
}
// contact statistic
function statistikKontak(){
    const totalKontak = contact.length;
    const statistikInisial = {};

    contact.forEach(data => {
        const inisial = data.nama[0].toUpperCase();
        if(statistikInisial[inisial]){
            statistikInisial[inisial]++;
        } else {
            statistikInisial[inisial] = 1;
        }
    });
    console.log(`Total kontak ${totalKontak}`);
    console.log(`Total kontak berdasarkan inisial:`);
    for (const inisial in statistikInisial){
        console.log(`${inisial}: ${statistikInisial[inisial]}`)
    }
}
// sort contact
function sortContact(){
    contact.sort((a, b) => a.nama.toLowerCase().localeCompare(b.nama.toLowerCase()));
    tampilkanData();
};

// main function
function main(){
    tampilkanData();
    tambahKontak("Lydia Ainsworth", "0184645234", "Lydiaaa@test.com");
    console.log("=======================================");
    tampilkanData();
    console.log("=======================================");
    console.log(cariKontak("S"));
    hapusKontak("Lydia Ainsworth") ;
    updateKontak("Sierra Lia", {noHP: "0099374825", email: "Sierrrraaaaa@gmail.com"});
    statistikKontak();
    console.log("=======================================");
    tampilkanData();
    console.log("=======================================");
    sortContact();
    cariKontakByInitial("s")

}
main()
=======
const contact = [
    {
        nama: "Sopyan Habibi",
        noHP: "081234567",
        email: "spnhabib@test.com"
    },
    {
        nama: "Sierra Lia",
        noHP: "09987654334",
        email: "sierraLia1@test.com"
    },
    {
        nama: "Luna Evangeline",
        noHP: "08561234123",
        email: "lunaeva@test.com"
    },
    {
        nama: "Damian Alric",
        noHP: "08222333444",
        email: "damian.alric@test.com"
    },
    {
        nama: "Celeste Mavina",
        noHP: "08999988777",
        email: "celestemav@test.com"
    },
    {
        nama: "Finnian Drake",
        noHP: "08765432100",
        email: "finndrake@test.com"
    }
];
// show contact
function tampilkanData(){
    for (let data of contact){
        contact.sort((a, b) => b.nama - a.nama);
        console.log(`nama: ${data.nama}`);
        console.log(`No. HP: ${data.noHP}`);
        console.log(`email: ${data.email}`);
    }
}
// add contact
function tambahKontak(nama, noHP, email){
    const kontakBaru = {
        nama: nama,
        noHP: noHP,
        email: email
    }
    contact.push(kontakBaru);
    console.log(`Kontak dengan nama "${nama}" berhasil ditambah!`);
}
// search contact
function cariKontak(keyword){
    const hasil = contact.filter(data => data.nama.toLowerCase().includes(keyword.toLowerCase()));

    return hasil.length > 0 ? hasil : "Kontak tidak ditemukan"
    
}
// search contact by initial
function cariKontakByInitial(inisial){
    const huruf = inisial.toUpperCase()
    const hasil = contact.filter(data => data.nama[0].toUpperCase() === huruf);


    if(hasil.length > 0){
        console.log(`Kontak dengan inisial ${huruf}:`)
        hasil.forEach(data => {
            console.log(`- ${data.nama}`); 
        });
    } else {
        console.log(`Kontak dengan inisial ${huruf} tidak ada`)
    }
}
// delete contact
function hapusKontak(nama){
    const index = contact.findIndex(data => data.nama.toLowerCase() === nama.toLowerCase());

    if (index !== -1){
        contact.splice(index, 1);
        console.log(`Kontak "${nama}" berhasil dihapus`);
    } else {
        console.log(`Kontak "${nama}" tidak ditemukan`)
    }
}
// update contact
function updateKontak(nama, dataBaru){
    const index = contact.findIndex(data => data.nama.toLowerCase() === nama.toLowerCase());

    if (index !== -1){
        for (let key in dataBaru){
            contact[index][key] = dataBaru[key];
        }
        console.log(`Data "${nama}" berhasil diubah`);
    } else {
        console.log(`Data tidak ditemukan`);
    }
}
// contact statistic
function statistikKontak(){
    const totalKontak = contact.length;
    const statistikInisial = {};

    contact.forEach(data => {
        const inisial = data.nama[0].toUpperCase();
        if(statistikInisial[inisial]){
            statistikInisial[inisial]++;
        } else {
            statistikInisial[inisial] = 1;
        }
    });
    console.log(`Total kontak ${totalKontak}`);
    console.log(`Total kontak berdasarkan inisial:`);
    for (const inisial in statistikInisial){
        console.log(`${inisial}: ${statistikInisial[inisial]}`)
    }
}
// sort contact
function sortContact(){
    contact.sort((a, b) => a.nama.toLowerCase().localeCompare(b.nama.toLowerCase()));
    tampilkanData();
};

// main function
function main(){
    tampilkanData();
    tambahKontak("Lydia Ainsworth", "0184645234", "Lydiaaa@test.com");
    console.log("=======================================");
    tampilkanData();
    console.log("=======================================");
    console.log(cariKontak("S"));
    hapusKontak("Lydia Ainsworth") ;
    updateKontak("Sierra Lia", {noHP: "0099374825", email: "Sierrrraaaaa@gmail.com"});
    statistikKontak();
    console.log("=======================================");
    tampilkanData();
    console.log("=======================================");
    sortContact();
    cariKontakByInitial("s")

}
main()
>>>>>>> 4ebe28f (progress membuat aplikasi daftar buku)
