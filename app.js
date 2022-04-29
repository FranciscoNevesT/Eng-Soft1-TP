//Configurações do servidor
const fs = require("fs");

const express = require('express');
const app = express();


app.use(express.static('.'))

var formularioRouter = require("./routes/formulario");
//Configurações do banco de dados

//Rota "catchall" de teste 

app.use("/formulario",formularioRouter);


//Rota "catchall" de teste 
app.get('/', (req, res) => {

    res.send(`<h1>Dummy Page</h1>
            <a href="/formulario">Pagina de formulario</a>`);
});

//Inicializando servidor
app.listen(3000);
