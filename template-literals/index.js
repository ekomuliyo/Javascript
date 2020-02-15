// Template literals / Template string

// const nama = 'Eko'
// const npm = '1519240094'
// console.log(`Hai nama saya ${nama}, dengan npm ${npm}.`);


// // Embedded Expressions
// console.log(`${ 1 + 1}`);

// const nilai = 10
// console.log(`${ nilai % 2 == 0 ? 'Genap' : 'Ganjil'}`);


// latihan
// 1. Html Fragments

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


// 2. Looping
const mhs2 = [
    {
        nama: 'budi',
        email: 'budi@mail.com'
    },    
    {
        nama: 'budi',
        email: 'budi@mail.com'
    },    
    {
        nama: 'budi',
        email: 'budi@mail.com'
    },    
]

const elemen2 = `<div class="mhs2">
${mhs2.map(mh => `<ul>
    <li>${mh.nama}</li>
    <li>${mh.email}</li>    
    </ul>`).join('')}
</div>`

// 3. Conditional
// ternary
const lagu = {
    judul: 'Terimalah lagu ini',
    penyanyi: 'Andmesh',
    feat: 'Rosa'
}

const elemen3 = `<div class="lagu">
    <ul>
        <li>${lagu.judul}</li>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.feat ? `${lagu.feat}` : ''}</li>
    </ul>
</div>`

// 4. Nesteed
const mhs3 = {
    nama: 'Eko',
    semester: 8,
    mataKuliah: [
        'RPL',
        'Ansi',
        'OOP'
    ]
}

const elemen4 = `<div class="mhs3">
    <h2>${mhs3.nama}</h2>
    <span class="npm">Semester : ${mhs3.semester}</span>
    <h4>Mata kuliah</h4>
    <ol>
        ${mhs3.mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
</div>`

document.body.innerHTML = elemen4
