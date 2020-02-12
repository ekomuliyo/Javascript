// filter, reduce, map

const array = [-1, -2 , 0, 1, 4, 6, 10]

console.log(array);

// filter
const newArrayFilter = array.filter(a => a > 3)
console.log(newArrayFilter);

// map
const newArrayMap = array.map(a => a * 2)
console.log(newArrayMap);

// reduce
const newArrayReduce = array.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0);

console.log(newArrayReduce);


// Method chaining
const result = array.filter(a => a > 5)
                    .map(a => a * 3)
                    .reduce((acc, cur) => acc + cur)
console.log(result);


// latihan filter, map, reduce

// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'))

// pilih yang hanya 'Javascript Lanjutan'
let result = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // ambil durasi masing-masing video
    .map(item => item.dataset.duration)

    // ubah durasi menjadi int, ubah menit jadi detik
    .map(waktu => {
        // 10:30 = [10, 30]
        const parts = waktu.split(':').map(part => parseInt(part))
        return (parts[0] * 60) + parts[1]
    })
    
    // jumlahkan semua detik
    .reduce((acc, curr) => acc + curr)


// ubah formatnya jadi jam menit detik
const jam = Math.floor(result / 3600)
result = result - jam * 3600
const menit = Math.floor(result / 60);
const detik = result - menit *60

// simpan ke DOM
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`

const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
const pJumlahVideo = document.querySelector('.jumlah-video')
pJumlahVideo.textContent = `${jumlahVideo} Video.`

console.log(detik);
