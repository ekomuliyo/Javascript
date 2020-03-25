// for..of 
// mengambil nilai dari sebuah iterable array dengan looping

const mhs = ['Eko', 'Andi', 'Rudo'];

// cara biasa 
for (let index = 0; index < mhs.length; index++) {
    const element = mhs[index];
    console.log(element);
}

mhs.forEach(m => console.log(m));

for( const m of mhs){
    console.log(m);
}


// String 
const nama = 'Eko Muliyo';
for(const n of nama){
    console.log(n);
}

const mhs2 = ['Rudi', 'Riko', 'Rani'];

mhs2.forEach((m,n) => {
    console.log(`${m} adalah indek ke ${n + 1}`);
})

for(const [i, m] of mhs2.entries()){
    console.log(`${m} adalah index ke ${i + 1}`)
}

const liNama = document.querySelectorAll('.nama');

liNama.forEach(n => console.log(n.textContent));

for(const li of liNama){
    console.log(li.innerHTML);
}

// Arguments 

function jumlahAngka(){
    // return arguments.reduce((a, i) => a + i); // error karena arguments bukan iterable array
    
    // let jumlah = 0;
    // arguments.forEach(a => jumlah += 1); // error karena arguments bukan iterable array

    let jumlah = 0;
    for( j of arguments){
        jumlah += j;
    }
    return jumlah;
}

console.log(jumlahAngka(1, 2, 5, 6, 7));

// for..in
// mengambil nilai properti pada object dengan looping

const mhs3 = {
    nama : 'Andi',
    umur : 20,
    email : 'andi@gmail.com'
}

for(m in mhs3){
    console.log(mhs3[m]);
}