//Fungsi menentukan harga diskon
function hitungDiskon(harga, diskon){
    let hasil = harga * (diskon/100);
    return hasil;
}

//Fungsi menentukan harga diskon
let hitungDiskon2 = function (harga, diskon){
    let hasil = harga * (diskon/100);
    return hasil;
}

//Penulisan fungsi dengan arrow function, paling populer, singkat
let hitungDiskon3 = (harga, diskon) => {
    let hasil = harga * (diskon/100);
    return hasil;
}

console.log(hitungDiskon(50000 , 20))
console.log(hitungDiskon2(50000 , 20))
console.log(hitungDiskon3(50000 , 20))

//Fungsi foreach hanya bisa untuk array
function cetakNamaSiswa(daftarNama){
    daftarNama.forEach(function(nama){
        console.log(nama);
    })
}
cetakNamaSiswa (['Alia','Roger'])

function hitungTambah(a,b){
    let hasilJumlah = a + b;

    return hasilJumlah;
}

console.log(hitungTambah(10, 5))