const path = require('path');
const Sequelize = require('sequelize');
const backdirname = path.dirname(__dirname);
const sequelize = require(`${backdirname}/models/models`);



const {Op} = require('sequelize');

exports.postDeleteArticle = ((req, res, err) => {
    console.log("Trigger de remoção realizado.\n");
    console.log("Lógica de remoção: TBD\n");
    const { articleId } = req.body;
    console.log("ArticleID: " + articleId);

    sequelize.models.Artigo.findByPk(articleId)
    .then((articleToBeDeleted) =>{
        // console.log(articleToBeDeleted);
        articleToBeDeleted.destroy();
    })
    .then((result) => {
        console.log("Artigo deletado com sucesso!");
        res.redirect('/my');
    });


    //removendo do banco de Citação
    sequelize.models.Citacao.findAll({where:{[Op.or]: [
            { citante: articleId },
            { citado: articleId }
        ]}})
    .then((linesToBeRemoved) => {
        return linesToBeRemoved.map(row => {
            row.destroy();
            return row.dataValues
        });
    });

    //Banco de Citacao apos remoção
    // sequelize.models.Citacao.findAll()
    // .then((lines)=>{
    //     return lines.map(row => {
    //         console.log(row.dataValues)
    //         return row.dataValues
    //     });
    // })
});