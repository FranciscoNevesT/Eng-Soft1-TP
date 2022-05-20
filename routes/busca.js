const path = require('path');
const express = require('express');
const Sequelize = require('sequelize');

const backdirname = path.dirname(__dirname);
var searchRouter = express.Router();

const sequelize = require(`${backdirname}/models/models`);

searchRouter.get('/search', async function(req, res, next) {
    let { term } = req.query;
    term = term.toLowerCase();

    var query = "Select Artigos.ID, Artigos.NOME as TITULO, Autors.NOME, Artigos.DATA_PUBLI, Artigos.DOWNLOADS From Artigos inner join Autors on Artigos.Autor_ID = Autors.ID;"
    const [arts, metadata] = await sequelize.query(query);
    console.log(arts[0]);
  	res.render(path.resolve(backdirname,'./views/resultadoBusca.html'), {arts});

  });

module.exports = searchRouter;