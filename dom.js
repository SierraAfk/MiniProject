const judul = document.getElementById("judul");
judul.innerText = "Selamat Datang!";
judul.style.color = "blue";

// mini challenge array method lanjutan
const nilai = [60, 85, 45, 90, 100, 70];

// ambil semua nilai lulus (>=70)
const lulus = nilai.filter(num => num >= 70)
document.getElementById("lulus").innerText = `Nilai peserta yang lulus: ${lulus}`;

// ubah nilai menjadi string (Nilai: 85)
const nilaiLulus = nilai.map(num => "Nilai: " + num);
document.getElementById("nilaiLulus").innerHTML = nilaiLulus

// rata-rata nilai
const totalNilai = nilai.reduce((accumulator, num) => accumulator + num, 0);
const rata2 = totalNilai / nilai.length
document.getElementById("rata2nilai").innerHTML = rata2

