//Configurações do servidor
const express = require('express');
const app = express();

//Configurações do banco de dados
const sequelize = require(`${__dirname}/models/models`)

sequelize.models.Citacao.findAll().then((cits)=>{
    console.log(cits);
});
sequelize.models.Artigo.findall().then((arts)=>{
    console.log(arts);
    sequelize.close();
});

//Rota "catchall" de teste 
app.get('/', (req, res) => {
    res.send(`<h1>Dummy Page</h1>`);
});


//Inicializando servidor
app.listen(3000);
