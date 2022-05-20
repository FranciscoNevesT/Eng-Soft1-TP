const path = require('path');
const express = require('express');

//const app = express();
//app.use(express.static(backdirname))
const backdirname = path.dirname(__dirname);
const statsRouter = express.Router();
const sequelize = require(`${backdirname}/models/models`);


statsRouter.get("/stats/:id", async function(req, res, next) {
    artigos = sequelize.models.Artigo;
    autores = sequelize.models.Autor;
    art = await artigos.findAll({ where: { ID: id } });
    var query = "Select Artigos.ID, Artigos.NOME as TITULO, Autors.NOME, Artigos.DATA_PUBLI, Artigos.DOWNLOADS From Artigos inner join Autors on Artigos.Autor_ID = Autors.ID;"
    const [result, metadata] = await sequelize.query(query);
//    stats = {
//        'art': art,
//          downloads/tempo
//          citações/tempo
//          downloads autor/tempo
//          citações autor/tempo
//    };


  	res.render(path.resolve(backdirname,'./views/indice.html'), {stats});
});

module.exports = statsRouter;
