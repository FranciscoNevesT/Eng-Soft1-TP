const path = require('path');
const express = require('express');

const app = express();
const backdirname = path.dirname(__dirname);
var getArtigosRouter = express.Router();

const sequelize = require(`${backdirname}/models/models`);

app.use(express.static(backdirname))
getArtigosRouter.get("", async function(req, res, next) {
    let articles = await sequelize.models.Artigo.findAll();
    let response = {
        articles: []
    };
    for (article of articles) {
        response.articles.push([article.NOME, "someguy"]);
    }
    res.send(response);
});

module.exports = getArtigosRouter;
