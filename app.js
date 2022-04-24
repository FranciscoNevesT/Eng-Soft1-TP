//Configurações do servidor


const express = require('express');
const app = express();
const path = require('path');
const controleBanco = require("./public/js/controleBanco");


//Configurações do banco de dados
const sequelize = require(`${__dirname}/models/models`)



app.use(express.static('.'))


//Rota "catchall" de teste 
app.get('/formulario', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/formulario.html'));
});


//Rota "catchall" de teste 
app.get('/', (req, res) => {
    res.send(`<h1>Dummy Page</h1>
            <a href="/formulario">Pagina de formulario</a>`);
});


controleBanco.getCitacao(sequelize,7);

//Inicializando servidor
app.listen(3000);
