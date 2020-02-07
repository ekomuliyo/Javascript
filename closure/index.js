// lexical scope

// contoh 1
function init(){
    return function(nama){
        console.log(nama);
    }
}

let panggilNama = init()
panggilNama('Eko')


// contoh 2
function ucapkanSalam(waktu){
    return function(nama){
        console.log(`Hai ${nama}, selamat ${waktu}`);
    }
}

let pagi = ucapkanSalam('Pagi')
let siang = ucapkanSalam('Siang')
let malam = ucapkanSalam('Malam')

pagi('Andi')
siang('Andi')
malam('Budi')

console.dir(pagi('Eko'))


// contoh 3
let add = (function(){
    let counter = 0
    return function(){
        return ++counter
    }
})()


console.log(add());
console.log(add());
console.log(add());
