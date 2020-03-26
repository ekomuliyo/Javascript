// memecah iterable / array menjadi single element
 
// menggabungkan 2 array
const mhs = ['Andi', 'Budi', 'Aan'];
const dosen = ['Rudi', 'Randi', 'Rendi'];
const orang = [...mhs, 'Riko', ...dosen];
// const orang = mhs.concat(dosen);
console.log(orang); 


// meng-cpy array
const mhs2 = ['Alis', 'Tuti', 'Reni'];
const mhs3 = [...mhs2];
mhs3[0] = 'Wandi';
console.log(mhs2);

const liMhs = document.querySelectorAll('li');
// cara biasa
// const mhs4 = [];
// for (let index = 0; index < liMhs.length; index++) {
//     mhs4.push(liMhs[index].textContent);
// }

const mhs4 = [...liMhs].map(m => m.textContent);
console.log(mhs4);


// mengambil setiap element dalam h1 dengan menambahkan class span
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;


