// promise mempunya tiga state
// 1. fullfiled,  terpenuhi, resolve()
// 2. rejected , tidak terpenuhi, reject()
// 3. finally, pending, biasanya digunakan untuk menampilkan animasi loading selamat proses data

// contoh 1
let janji = true;
const janji1 = new Promise((resolve, reject) => {
    if (janji) {
        resolve('Janji ditepati');
    }else{
        reject('Janji tidak ditepati');
    }
});

janji1
    .then(response => console.log(`OK : ${response}`))
    .catch(response => console.log(`Not OK : ${response}`));


// contoh 2
let janjibaru = true;
const janjibaru1 = new Promise((resolve, reject) => {
    if (janjibaru) {
        setTimeout(() => {
            resolve('janji terpenuhi setelah 1 detik');
        }, 1000);
    }else{
        setTimeout(() => {
            reject('janji tidak terpenuhi setelah 1 detik')
        }, 1000);
    }
})

// ini untuk melihat proses promise
// console.log(janjibaru1.then(() => console.log(janjibaru1)));

janjibaru1
    .then(response => console.log(`OK : ${response}`))
    .catch(response => console.log(`Not OK : ${response}`))
    .finally(() => console.log(`selesai pending`));


// Promise All
// untuk memanggil beberapa promise dalam satu kali waktu

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Dilan',
            sutradara: 'Andi',
            pemera: 'aan, buddi'
        }]);
    }, 1000);
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Palembang',
            temp: 30,
            kondisi: 'Cerah'
        }])
    }, 500);
})

Promise.all([film, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });