var express = require('express');
var vizualizacaoRoter = express.Router();
const sequelize = require(`../models/models`)
const controleBanco = require(`../public/js/controleBanco`);
const path = require('path');
const fs = require('fs')

var formidable = require('formidable');
const { route } = require('express/lib/application');

vizualizacaoRoter.get("",  function(req,res,next) {
    
    controleBanco.getAutores(sequelize,"./data/autores.json");
    controleBanco.getArtigos(sequelize,"./data/artigos.json");
    controleBanco.getVizualizacao(sequelize,"./data/vizu.json");
    res.sendFile(path.resolve(__dirname,'../views/vizualizacao.html'));  
})


module.exports = vizualizacaoRoter;

