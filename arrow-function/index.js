// function expression

const tampilNama = function(nama){
    return `Hai, ${nama}`
}

console.log(tampilNama('eko'));


// arrow funtion
const sapa = (nama) => { return `Hai ${nama}`}
console.log(sapa('andi'));

const sapaLagi = (nama, waktu) => { return `Hai ${nama}, selamat ${waktu}`}
console.log(sapaLagi('andi', 'malam'));

// implisit return
const ucapan = nama => `Hai. ${nama}`
console.log(ucapan('budi'));

const hello = () => 'Hello World'
console.log(hello());

// map biasa
let mhs = ['Eko', 'Andi', 'Aan']
let jumlahHuruf = mhs.map(function (nama){
    return nama.length;
})
console.log(jumlahHuruf);

// map arrow function
let motor = ['Honda', 'Suzuki', 'Yamaha']
let jumlahHurufMotor = motor.map(nama => nama.length)
console.log(jumlahHurufMotor);

let jumlahHurufMotorObject = motor.map(nama => ({nama, jumlah : nama.length}))

console.table(jumlahHurufMotorObject)
