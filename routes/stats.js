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
    art = await artigos.findAll({ where: { ID: req.params.id } });
    console.log(art[0].ID)
    const [data, metadatatime] = await sequelize.query(
        "Select Downloads.DATA From Downloads WHERE Downloads.Artigo_ID LIKE :art_id",
        {
          replacements: { art_id: art[0].ID }
        }
    );
    var downloadPerMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
    for (var i = 0; i < data.length; i++) {
        let monthMinusOne = parseInt(data[i].DATA.split("-")[1]) - 1;
        downloadPerMonth[monthMinusOne] = downloadPerMonth[monthMinusOne] + 1;
        // more statements
    }
    console.log(downloadPerMonth);
    var query = "Select Artigos.ID, Artigos.NOME as TITULO, Autors.NOME, Artigos.DATA_PUBLI, Artigos.DOWNLOADS From Artigos inner join Autors on Artigos.Autor_ID = Autors.ID;"
    const [result, metadata] = await sequelize.query(query);
//    stats = {
//        'art': art,
//          downloads/tempo
//          citações/tempo
//          downloads autor/tempo
//          citações autor/tempo
//    };


  	res.render(path.resolve(backdirname,'./views/stats.html'), {downloadPerMonth:downloadPerMonth});
});

module.exports = statsRouter;
