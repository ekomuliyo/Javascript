// Object literal
let pegawai1 = {
    nama : "Eko",
    gaji : 100,
    tambahGaji: function (gaji){
        this.gaji += gaji
        console.log(`Hai ${this.nama} gaji anda telah ditambahkan sejumlah ${gaji}`);
    }
}

let pegawai2 = {
    nama : "Andi",
    gaji : 100,
    tambahGaji: function (gaji){
        this.gaji = this.gaji + gaji
        console.log(`Hai ${this.nama} gaji anda telah ditambahkan sejumlah ${gaji}`);
    }
}

const methodPegawai = {
    
    tambahGaji : function(gaji){
        this.gaji += gaji;
        console.log(`Hai ${this.nama} gaji anda bertambah sejumah ${gaji}`);
    }
}

// Object Function Declaration
function Pegawai(nama, gaji){
    let pegawai = Object.create(methodPegawai); // Object.create mirip dengan pewarisan
    pegawai.nama = nama;
    pegawai.gaji = gaji;

    return pegawai;
}

let pegawai = Pegawai("andi", 10)

// Object Function Constructor
function PegawaiConstruktor(nama, gaji){
    this.nama = nama;
    this.gaji = gaji;
}

PegawaiConstruktor.prototype.tambahGaji = function (gaji){
    this.gaji += gaji;
    console.log(`Hai ${this.nama} gaji anda bertambah sejumah ${gaji}`);
}

let pegawaiConstruktor = new PegawaiConstruktor("andi", 10)

// versi Class

class ClassPegawaiConstruktor{
    constructor(nama, gaji){
        this.nama = nama;
        this.gaji = gaji;
    }

    tambahGaji(gaji){
        this.gaji += gaji;
        console.log(`Hai ${this.nama} gaji anda bertambah sejumah ${gaji}`);
    }
}

let classPegawaiConstruktor = new ClassPegawaiConstruktor('rudi', 20)