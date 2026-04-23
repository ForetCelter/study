// function buatRekening() {
//     let saldo = 0;

//     function setor(jumlah){
//         saldo += jumlah;
//         console.log(`Setor Rp${jumlah}. saldo sekarang: Rp${saldo} `);
//     }

//     function tarik(jumlah){
//         saldo -= jumlah;
//         console.log(`Tarik Rp${jumlah}. saldo sekarang: Rp${saldo} `);
//     }


//     function cekSaldo() {
//         return console.log(saldo);
//     }
//     return {setor, tarik, cekSaldo}
// }

// const rekening = buatRekening()

// rekening.setor(100000)
// rekening.setor(50000)
// rekening.tarik(30000)
// rekening.cekSaldo()

function buatTimer() {
    let detik = 0;

    function mulai() {
        detik++;
        console.log(`Timer berjalan: ${detik} detik`);
    }

    function reset() {
        detik = 0;
        console.log(`Timer direset`)
    }

    function cekWaktu() {
        return console.log(`Waktu sekarang: ${detik} detik`);
    }
    return {mulai, reset, cekWaktu}
}

const timer = buatTimer()
timer.mulai()
timer.mulai()
timer.mulai()
timer.cekWaktu()
timer.mulai()
timer.reset()
timer.cekWaktu()
timer.mulai()