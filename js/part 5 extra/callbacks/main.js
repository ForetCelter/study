// hello(wait);

// function hello(callback) {
//     console.log("Hello")
//     callback();
// }

// function wait() {
//     console.log("Wait")
// }

// function leave() {
//     console.log("Leave")
// }

// function goodbye() {
//     console.log("Goodbye")
// }

// sum(displayDOM, 10, 20)

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result)
// }

// function displayConsole(result) {
//     console.log(result)
// }

// function displayDOM(result) {
//     document.getElementById("my-h1").textContent = result;
// }

function lakukanSesuatu(nama, callback) {
    console.log(`Menyiapkan pesanan untuk ${nama}`)
    callback(nama)
}

function antar(nama) {
    console.log(`${nama}, pesananmu sudah siap dan diantar!`)
}

function simpan(nama) {
    console.log(`${nama}, pesananmu disimpan di kasir!`)
}

function batal(nama) {
    console.log(`Maaf ${nama}, pesananmu dibatalkan.`)
}

lakukanSesuatu("Aca", antar)
// lakukanSesuatu("Aca", simpan)
// lakukanSesuatu("Aca", batal)