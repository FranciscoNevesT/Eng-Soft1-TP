var express = require('express');
var formularioRouter = express.Router();
const sequelize = require(`../models/models`)
const controleBanco = require(`../public/js/controleBanco`);
const path = require('path');
const fs = require('fs')

var formidable = require('formidable');
const { route } = require('express/lib/application');

function addArtigo(sequelize,id,nome,autor_id,data_publi,link,dowloads){
    sequelize.models.Artigo.create({
        ID: id,
        NOME: nome,
        AUTOR_ID: autor_id,
        DATA_PUBLI: data_publi,
        LINK: link,
        DOWNLOADS: dowloads
    })
}

function addCitacao(sequelize,citante,citado){
    sequelize.models.Citacao.create({
        CITANTE: citante,
        CITADO: citado
    });
}

formularioRouter.get("",  function(req,res,next) {
    controleBanco.getArtigos(sequelize,"./data/artigos.json");
    controleBanco.getAutores(sequelize,"./data/autores.json");
    
    res.sendFile(path.resolve(__dirname,'../views/formulario.html'));  
})

formularioRouter.post("/post/:id",function(req,res,next){
    const form = new formidable.IncomingForm();

    var params = req.params.id.split("_")

    var functionPass = params.shift();


    form.parse(req, (err, fields, files) => {

        const oldpath = files.artAnexo.filepath;
        const newpath = path.join(__dirname, "../artigos/" + params[0] + ".pdf");

        fs.copyFile(oldpath, newpath, (err) => {
            if(err){
                console.log(err)
            }
        });

        
        params = params.join("_");

        if(functionPass == "add"){
            res.redirect("../../formulario/add/" + params);
        }else{

            res.redirect("../../formulario/edit/save/" + params);
        }
    });
    
})

formularioRouter.get("/edit/save/:id",  function(req,res,next) {
    var requests = req.params.id.split("@@@")
    
    var artData = requests.shift().split("_")

    sequelize.models.Artigo.destroy({
        where: {
            id: artData[0]
        }
    }).then(
        addArtigo(sequelize,artData[0],artData[1],artData[2],artData[3],artData[4],artData[5])
    );

    var citDeletar = controleBanco.getCitacao(sequelize,artData[0],"");

    citDeletar.then((out) =>{
        for(var i = 0; i<out.length;i++){
            sequelize.models.Citacao.destroy({
                where: {
                    CITANTE: out[i].CITANTE,
                    CITADO: out[i].CITADO
                }
            })
        }
        for(var i = 0; i<requests.length;i++){
            var artCitado = requests[i];

            addCitacao(sequelize,artData[0],artCitado);
        }
    })   

    fs.unlink("./data/cit" + artData[0] + ".json", (err) =>{
        if (err){
            console.log(err)
            return
        }
    })
    
    res.redirect("/");
})

formularioRouter.get("/edit/:id",  function(req,res,next) {
    var id = req.params.id;
    controleBanco.getArtigos(sequelize,"./data/artigos.json");
    controleBanco.getAutores(sequelize,"./data/autores.json");
    controleBanco.getCitacao(sequelize,id,"./data/cit" + id + ".json")

    res.sendFile(path.resolve(__dirname,'../views/formulario.html'));  
})

formularioRouter.get("/add/:id",  function(req,res,next) {
    var requests = req.params.id.split("@@@")

    var artData = requests.shift().split("_")

    addArtigo(sequelize,artData[0],artData[1],artData[2],artData[3],artData[4],artData[5]);

    for(var i = 0; i<requests.length;i++){
        var artCitado = requests[i];

        addCitacao(sequelize,artData[0],artCitado);
    }

    res.redirect("/");
})

module.exports = formularioRouter;

