// Destructuring Array

const nama = ['Muhmmad', 'Budi', 'Santoso']

// mengambil semua variabel nilai 
const [satu, dua, tiga] = nama
// mengambil beberapa variabel / skip variabel
const [one, , three] = nama

// swap items
let a = 1
let b = 2
console.log(`${a} --- ${b}`);
[a, b] = [b, a]
console.log(`${a} --- ${b}`);

// return value pada function
function f() {
    return [1, 3, 4]
}
const [aa, bb, cc] = f()
console.log(cc);


// Rest parameter
const[aaa, ...values] = [1,2,3,4,5]
console.log(aaa);
console.log(values[0]);

// Desctructuring Object literal
const mhs = {
    nama: 'Budi',
    umur: 19
} 

const {nama, umur} = mhs;
console.log(nama);

// Destructuring Object langsung inisial nilai
({nama, umur} = {nama : 'Budi santoso', umur: 20})
console.log(nama);

// Assign ke variabel baru
const mhs = {
    nama: 'budi lagi',
    umur: 20
}
const {nama: n, umur: u} = mhs
console.log(n);

// Memberikan default nilai dan assign variabel baru
const mhs = {
    nama: 'budi lagi',
    umur: 20,
    email: 'budi@gmail.com'
}
const {nama: n, umur: u, email: e = '@gmail.com'} = mhs
console.log(e);

// Rest parameter
const mhs = {
    nama: 'budi lagi',
    umur: 20,
    email: 'budi@gmail.com' 
}
const {nama, ...values} = mhs
console.log(mhs);


// mengambil field tertentu dari object, mirip seperti filter field object sebelum di eksekusi dalam function
const mhs = {
    nama: 'budi pratama',
    umur: 20,
    email: 'budi@gmail.com' 
}

function getMhs({nama}) {
    return nama
}

console.log(getMhs(mhs));



