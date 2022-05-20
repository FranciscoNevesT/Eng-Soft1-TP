const path = require('path');
const express = require('express');

//const app = express();
//app.use(express.static(backdirname))
const backdirname = path.dirname(__dirname);
const indiceRouter = express.Router();
const sequelize = require(`${backdirname}/models/models`);

//indiceRouter.get("", function(req, res, next) {
indiceRouter.get("", async function(req, res, next) {
    artigos = sequelize.models.Artigo;
    autores = sequelize.models.Autor;

    var query = "Select Artigos.ID, Artigos.NOME as TITULO, Autors.NOME, Artigos.DATA_PUBLI, Artigos.DOWNLOADS From Artigos inner join Autors on Artigos.Autor_ID = Autors.ID;"
    const [arts, metadata] = await sequelize.query(query);
    console.log(arts[0]);
  	res.render(path.resolve(backdirname,'./views/indice.html'), {arts});
//    artigos.findAll().then(
//	arts=> res.render(path.resolve(backdirname,'./views/indice.html'), {arts}));
});

module.exports = indiceRouter;
