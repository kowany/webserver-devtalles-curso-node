require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Hadlebars
app.set('view engine', 'hbs');           
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public'))


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Rosy Villaverde',
        titulo: 'Curso de Node js'
    })
})
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Rosy Villaverde',
        titulo: 'Curso de Node js'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Rosy Villaverde',
        titulo: 'Curso de Node js'
    });
})
app.get('*', (req, resp) => {
    resp.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`La aplicación de ejemplo está corriendo en el puerto ${port}`)
})