//Configurações do servidor
const fs = require('fs');

const express = require('express');
const app = express();

app.use(express.static('.'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Configuração do parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Rotas
var indiceRouter = require("./routes/indice");
var getArtigosRouter = require("./routes/getArtigos");
var formularioRouter = require("./routes/formulario");
var searchRouter = require("./routes/busca");
var vizualizacaoRoter = require("./routes/vizualizacao")
var deleteArticleRouter = require("./routes/deleteArticle");
var dowloadeRouter = require("./routes/dowload");


app.use("/formulario",formularioRouter);
app.use("/", indiceRouter);
app.use("/getarticles", getArtigosRouter);
app.use("/buscar", searchRouter);
app.use("/vizu",vizualizacaoRoter);

app.use(deleteArticleRouter);
app.use(dowloadeRouter);

//Rota "catchall" de teste 
//app.get('/', (req, res) => {
//
//    res.send(`<h1>Dummy Page</h1>
//            <a href="/formulario">Pagina de formulario</a>`);
//});

//Inicializando servidor
app.listen(3000);
