const path = require('path');
const express = require('express');
const Sequelize = require('sequelize');

const backdirname = path.dirname(__dirname);
var searchRouter = express.Router();

const sequelize = require(`${backdirname}/models/models`);

searchRouter.get('/search', (req, res) => {
    let { term } = req.query;
    term = term.toLowerCase();
    console.log("Termo: ", term);

    artigos = sequelize.models.Artigo;

    artigos.findAll({ where: { NOME: { [Sequelize.Op.like]: '%' + term + '%' } } })
      .then(arts => res.render(path.resolve(backdirname,'./views/resultadoBusca.html'), {arts}));
  });

module.exports = searchRouter;