// Rest Paramter
// mengambil dari beberapa nilai yang di diambil dari argument sebuah function menjadi array

function myFunc(){
    // return `a = ${a}, b = ${b}, args = ${args}`;
    // return Array.from(arguments);
    return [...arguments];
}

console.log(myFunc(1, 2, 3, 4, 5));

function jumlahkan(...angka){
    // let total = 0;
    // for(const a of angka){
    //     total += a;
    // }
    // return total;
    return angka.reduce((a, b) => a+b);
}

console.log(jumlahkan(1, 2, 4, 5, 6));

// array destructuring
const kelompok1 = ['Eko', 'Andi', 'Budi'];
const [ketua, ...anggota] = kelompok1;
console.log(anggota);

// object desctructuring
const team = {
    pm: 'Eko Muliyo',
    frontEnd1: 'Budi',
    frontEnd2: 'Aan',
    backEnd: 'Arlan'
}

const {pm, ...myTeam} = team;
console.log(pm);

// filtering
function filterBy(type, ...values){
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'Budi', false, true, false, 'Andi', 5, 10));