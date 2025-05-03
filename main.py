angka = 2135

# Format biner
biner = "{0:b}".format(angka)
print("Biner:", biner)

# Format heksadesimal
heksadesimal = "{0:x}".format(angka)
print("Heksadesimal:", heksadesimal)

# Format oktal
oktal = "{0:o}".format(angka)
print("Oktal:", oktal)

# Format dengan 4 angka di belakang koma
empat_koma = "{0:.4f}".format(angka)
print("Desimal 4 angka di belakang koma:", empat_koma)

# Format dengan pemisah ribuan koma
ribuan_koma = "{0:,}".format(angka)
print("Pemisah ribuan dengan koma:", ribuan_koma, "\n")

string1 = "abjiytwrsgnmzcqxfodhpkeuvlcgdmzkoyjsutqvefphrxwlanbi"

# Susun nama panggilan sopyan dari huruf-huruf di string1
string2 = ""

for huruf in "sopyan":
    if huruf in string1:
        string2 += huruf

print("String2 (nickname):", string2)
