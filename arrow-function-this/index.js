// Arrow Function di konstruktor function
const Mhs = function(){
    this.nama = 'Andi',
    this.umur = 33
    this.sayHello = () => {
        console.log(`Halo saya ${this.nama}, umur saya ${this.umur} tahun`);
    }
}

const andi = new Mhs();


// Array Function di object literal
const mhs1 = {
    nama: "budi",
    umur: 18,
    sayHello: () => {
        console.log(`Halo saya ${this.nama}, umur saya ${this.umur} tahun`); // variabel undefine karena arrow function tidak memiliki konsep this, maka dia akan mencari this nya diluar lexical scope
    }
}

// penggunaan function expression dan function declaration pada arrow function
const Mahasiswa = function(){
    this.nama = "rudi",
    this.umur = 55,

    // ini function expression yaitu sebuah function disimpan dulu dalam variabel
    this.sayHello = function (){
        console.log(`Halo saya ${this.nama}, umur saya ${this.umur} tahun`); 
    }

    // ini function declaration yaitu sebuah function yang dimiliki oleh global dari javascript
    setInterval(() => {
        console.log(this.umur++);
        
    }, 500)
}

// const rudi = new Mahasiswa()


const box = document.querySelector('.box');
box.addEventListener('click', function () {
    this.classList.toggle('size') // classList untuk mengelola daftar class dari suatu object dom, toggle adalah menambahkan class baru jika belum ada dan jika sudah ada akan menghilangkan class tersebut

    let size = 'size'
    let caption = 'caption'

    if (this.classList.contains('size')) {
        [size, caption] = [caption, size]
    }

    setTimeout(() => {
        this.classList.toggle('caption')
    }, 600)
})