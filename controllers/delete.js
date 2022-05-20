const path = require('path');
const Sequelize = require('sequelize');
const backdirname = path.dirname(__dirname);
const sequelize = require(`${backdirname}/models/models`);




exports.postDeleteArticle = ((req, res, err) => {
    console.log("Trigger de remoção realizado.\n");
    console.log("Lógica de remoção: TBD\n");
    const { articleId } = req.body;
    console.log("ArticleID: " + articleId);

    sequelize.models.Artigo.findByPk(articleId)
    .then((articleToBeDeleted) =>{
        articleToBeDeleted.destroy();
        console.log(articleToBeDeleted);
    })
    .then((result) => {
        console.log("Artigo deletado com sucesso!");
        res.redirect('/');
    });
});