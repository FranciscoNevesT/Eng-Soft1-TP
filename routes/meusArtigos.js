const path = require('path');
const express = require('express');
const Sequelize = require('sequelize');

const backdirname = path.dirname(__dirname);
var myArticlesRouter = express.Router();

const sequelize = require(`${backdirname}/models/models`);

myArticlesRouter.get('/my', (req, res) => {
    autores = sequelize.models.Autor;
    artigos = sequelize.models.Artigo;
    let nome = 'Sasuke';
    usuario = autores.findOne({ where: { NOME: { [Sequelize.Op.like]: '%' + nome + '%' } } });
    usuario.then(usu => {
        artigos.findAll({ where: { AUTOR_ID: { [Sequelize.Op.like]: usu.dataValues.ID } } })
            .then(arts => res.render(path.resolve(backdirname,'./views/meusArtigos.html'), {arts, nome}));
    });
});

module.exports = myArticlesRouter;