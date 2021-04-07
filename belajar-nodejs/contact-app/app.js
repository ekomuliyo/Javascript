// mengambil argumen
const yargs = require('yargs');
const { simpanContact, listContacts, detailContact, deleteContact } = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'No HP',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        simpanContact(argv.nama, argv.email, argv.noHP);
    }
}).demandCommand();

// menampilkan daftar semua nama & no HP contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler() {
        listContacts();
    }
})

// menampilkan detail dari sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail dari contact',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        detailContact(argv.nama);
    }
})

// menghapus sebuah contact
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        deleteContact(argv.nama);
    }
})


yargs.parse();


