// mengambil argumen
const yargs = require('yargs');
const { simpanContact } = require('./contacts');

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
        // const contact = { 
        //     nama: argv.nama, 
        //     email: argv.email, 
        //     noHP: argv.noHP
        // };

        // console.log(contact);
        simpanContact(argv.nama, argv.email, argv.noHP);
    }
});

yargs.parse();

// const { pertanyaan, simpanContact } = require('./contacts');

// const main = async () => {
//     const nama = await pertanyaan('Nama : ');
//     const email = await pertanyaan('Email : ');
//     const noHP = await pertanyaan('Nomor HP : ');

//     simpanContact(nama, email, noHP);
// } 

// main();

