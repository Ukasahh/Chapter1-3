function luasSegitiga(alas, tinggi){
    let hasil = alas * tinggi/2;
    return hasil;
}

function volKubus(sisi){
    let hasil = sisi * sisi * sisi;
    return hasil;
}

let volTabung = (r, tinggi) => {
    let hasil = 22/7 * r**2 * tinggi;
    return hasil;
}

console.log("Luas Segitiga:" + luasSegitiga(5, 10))
console.log(volKubus(5))
console.log(volTabung(7, 14))