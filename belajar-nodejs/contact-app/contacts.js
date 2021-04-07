const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// membuat folder
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const loadContact = () => {
    const fileBuffer = fs.readFileSync('./data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}


const simpanContact = (nama, email, noHP) => {
    const contact = { nama, email, noHP };

    const contacts = loadContact();

    // cek duplikat
    const duplikat = contacts.find(contact => contact.nama == nama);
    if(duplikat) {
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar'));
        return false;
    }

    // cek email
    if(email) {
        if(!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold('Email tidak valid'));
            return false;
        }
    }

    // cek noHP
    if(!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log(chalk.red.inverse.bold('Nomor HP tidak valid!'));
        return false;
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log(chalk.green.inverse.bold('berhasil dimasukan'));
}

const listContacts = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Daftar Kontak : '));
    contacts.forEach((contact, index) => {
        console.log(`${index + 1}. ${contact.nama} - ${contact.noHP}`);
    });
}

const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find(contact => contact.nama.toLowerCase() === nama.toLowerCase());

    if(!contact) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
        return false;
    }

    console.log(chalk.cyan.inverse.bold(contact.nama));
    console.log(contact.noHP);
    if(contact.email) {
        console.log(contact.email);
    }

}

const deleteContact = (nama) => { 
    const contacts = loadContact();
    const newContacts = contacts.filter(contact => contact.nama.toLowerCase() != nama.toLowerCase());

    if(contacts.length == newContacts.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
        return false;
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))

    console.log(chalk.green.inverse.bold(`${nama} berhasil dihapus`));
}


module.exports = { 
    simpanContact,
    listContacts,
    detailContact,
    deleteContact
}