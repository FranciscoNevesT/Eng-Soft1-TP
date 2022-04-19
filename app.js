
//Configurações do servidor
const express = require('express')
const app = express();



//Rota "catchall" de teste 
app.use((req, res, next) => {
    res.send(`<h1>Dummy Page</h1>`);
});



//Inicializando servidor
app.listen(3000);