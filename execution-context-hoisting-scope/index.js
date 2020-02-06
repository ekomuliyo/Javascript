// Execution Context, Hoisting, Scope

// creation phase pada global context
// hoisting
// mencari semua variabel lalu mendefinisikan nilai nya undefined
// mencari semua function lalu mendefinikasi nilai nya dengan isi function itu sendiri
// window sebagai global object
// this sebagai window

// execution phase
// ketika function nya setelah variabel maka tidak ada masalah
// apabila function nya sebelum variabel maka akan undefined

console.log(sayHello());

var nama = 'Eko Muliyo'
var umur = 23

function sayHello(){
    return `saya ${nama}, umur saya ${umur} tahun`
}

// ketika ada suatu function maka dia akan membuat Local Context Execution
// di dalamnya juga terdapat creation dan execution phase
// window
// arguments
// hoisting

// contoh 1 local context execution
var name = "Eko Muliyo"
var age = 23

function printUrl(username){
    var fbUrl = 'http://facebook.com/'
    return fbUrl + username
}

console.log(printUrl(name))

// contoh 2 local context execution
function a(){
    console.log('A');
    
    function b(){
        console.log('B');

        function c(){
            console.log('C');
        }
        c()
    }
    b()
}
a()

// Scope adalah mencari definisi variabel terdekat hingga ke variabel di luar context

function satu(){
    var username = 'Eko'
    console.log(username);
}

function dua(){
    console.log(username);
}

console.log(username);
var username = 'Andi'
satu()
dua('Budi')
console.log(username);

