const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayout);

app.get('/', (req, res) => {
    const mhs = [
        { 
            nama: 'Andi',
            email: 'andi@gmail.com',
        },
        { 
            nama: 'Budi',
            email: 'Budi@gmail.com',
        },
        { 
            nama: 'Rudi',
            email: 'Rudi@gmail.com',
        },
    ]
    res.render('index', { 
        title: 'Halaman Home', 
        layout: 'layouts/main-layout',
        mhs });
});
app.get('/about', (req, res) => {
    res.render('about', { 
        layout: 'layouts/main-layout',
        title: 'Halaman About'
     });
});
app.get('/contact', (req, res) => {
    res.render('contact', { 
        layout: 'layouts/main-layout',
        title: 'Halaman Contact'
     });
});

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});