// Template literals / Template string

const nama = 'Eko'
const npm = '1519240094'
console.log(`Hai nama saya ${nama}, dengan npm ${npm}.`);


// Embedded Expressions
console.log(`${ 1 + 1}`);

const nilai = 10
console.log(`${ nilai % 2 == 0 ? 'Genap' : 'Ganjil'}`);

const mhs = {
    nama: 'Andi',
    npm: '1519240091',
    umur: 22 
}

const elemen = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="npm">${mhs.npm}</span>
    <span class="umur">${mhs.umur}</span>
</div>`

console.log(elemen);



