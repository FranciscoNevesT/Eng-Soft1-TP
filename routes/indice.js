const path = require('path');
const express = require('express');

//const app = express();
//app.use(express.static(backdirname))
const backdirname = path.dirname(__dirname);
const indiceRouter = express.Router();
const sequelize = require(`${backdirname}/models/models`);

indiceRouter.get("", function(req, res, next) {
    artigos = sequelize.models.Artigo;
    artigos.findAll().then(
	arts=> res.render(path.resolve(backdirname,'./views/indice.html'), {arts}));
});

module.exports = indiceRouter;
