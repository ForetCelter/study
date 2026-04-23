// const appNama = "Aplikasi keren";

// function perkenalan() {
//   console.log(`Aplikasi ini adalah ${appNama}`);
// }
// perkenalan();

// function cobaScope() {
//   let pesan = "Hai";
//   console.log(pesan);
// }
// console.log(pesan) // muncul ini. kenapa bisa? Uncaught ReferenceError: pesan is not defined

// pertanyaan nya kenapa ketika saya menambahkan cobaScope() dibawah malah tidak muncul apa apa? dan ketika saya melakukan console.log(cobaScope()) munculnya undefined kan sudah saya tambah "" harusnya jadi tipe string kan?

// if(true){
//     let a = 1
//     var b = 2
// }

// console.log(a)
// console.log(b)
// pertanyaannya apakah ini seperti bug yang tidak diperbaiki atau memang hanya ini hanya cara yang diketahui untuk membuat variabel pada jaman dulu? dan apakah hanya berlaku pada blok if()?

// Buat closure buatSapaan — menerima parameter nama, me-return function baru yang console.log "Halo [nama], kamu dipanggil [X] kali!" — X bertambah setiap dipanggil.3
// Closure butuh variabel counter di dalam buatSapaan tapi di luar function yang di-return

// function buatSapaan(nama) {
//   let x = 0;
//   return function () {
//     x++;
//     return console.log("Halo " + nama + ", Kamu dipanggil " + x + " kali!");
//   };
// }

//   const counter = buatSapaan("Nama");
//   counter();
//   counter();
//   counter();

// Saya dibantu ai dengan ini. saya sudah mengerjakan selama 1 jam lebih. dan sampai sekarang tidak mengerti. dan saya juga sangat bingung dengan instruksinya. sepertinya saya tidak sesuai instruksi. jujur saya sangat struggle di bagian scopes dan closures

// // Contoh 1
// function outer() {

//   let message = "Hello";
//   function inner() {
//     console.log(message)
//   }

//   inner()
// }

// outer()

// Contoh 2
// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`Count increase to ${count}`);
//   }

//   function getCount(){
//     return count;
//   }

//   return{increment, getCount};
// }

// const counter = createCounter()
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`)

// Contoh 2

// function createGame() {
//   let score = 0;

//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points}pts`);
//   }

//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points}pts`);
//   }

//   function getScore() {
//     return score;
//   }

//   return { increaseScore, decreaseScore, getScore };
// }

// const game = createGame();

// game.increaseScore(6);
// game.increaseScore(5);
// game.decreaseScore(3);

// console.log(`The final score is ${game.getScore()}pts`);
