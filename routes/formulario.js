var path = require('path');
var express = require('express');
var formularioRouter = express.Router();


//var backdirname = __dirname.split("/")
//backdirname.pop()
//backdirname = backdirname.join("/")
var backdirname = path.dirname(__dirname);

const app = express();
app.use(express.static(backdirname))


const sequelize = require(`${backdirname}/models/models`)
const controleBanco = require(`${backdirname}/public/js/controleBanco`);
//const path = require('path');

formularioRouter.get("",  function(req,res,next) {
    controleBanco.getArtigos(sequelize,"./data/artigos.json");
    controleBanco.getAutores(sequelize,"./data/autores.json");

    res.sendFile(path.resolve(backdirname,'./views/formulario.html'));  
})

formularioRouter.get("/edit/:id",  function(req,res,next) {

    var requests = req.params.id.split("@@@")

    var artData = requests.shift().split("_")

    sequelize.models.Artigo.create({
        ID: artData[0],
        NOME: artData[1],
        AUTOR_ID: artData[2],
        DATA_PUBLI: artData[3],
        LINK: artData[4],
        DOWNLOADS: artData[5]
    });

    console.log(requests)

    for(var i = 0; i<requests.length;i++){
        var artCitado = requests[i]

        sequelize.models.Citacao.create({
            Citacao_ID: artData[0],
            Artigo_ID: artCitado
        });
    }

    res.redirect("/");
})

module.exports = formularioRouter;

