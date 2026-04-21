// Function declaration: 
// function nama(param) { return ... }
function sapa(nama) {
    return "Halo," + nama + "!"
};
console.log(sapa("aca"));


// Function expression: 
// const nama = function(param) { return ... }
const hitungLuas = function(p, l) {
    return p * l
};
console.log(hitungLuas(10,5));


// Arrow function singkat — tanpa kurung kurawal dan tanpa kata return
const kaliDua = (angka) => angka * 2;
console.log(kaliDua(3));


// Arrow function: 
// const nama = (param) => ...
const perkenalan = (nama,kota = "Indonesia") => {
    return "Nama saya " + nama + ". Saya berasal dari " + kota
};
console.log(perkenalan("Aca", "Makassar"))
console.log(perkenalan("Aca",))

const hitungDiskon = (harga,diskon) => {
    return harga * diskon / 100
}

console.log(hitungDiskon(20000, 20))

// Pertanyaan. kenapa saat menyapa harus pake "" sedangkan pas menghitung tidak perlu pake "" 
