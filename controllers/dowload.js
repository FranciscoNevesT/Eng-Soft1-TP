const fs = require('fs')

const sequelize = require(`../models/models`);

exports.postDeleteArticle = ((req, res, err) => {
    console.log("Trigger de dowload realizado.\n");
    // const { articleId } = req.body;
    console.log(req.body);

    artigos = sequelize.models.Artigo;
    console.log(artigos)

    path = "artigos/"+req.body.articleId+".pdf";

    try {
        if (fs.existsSync(path)) {
            artigos.increment("DOWNLOADS", {by: 1,
              where: {ID : req.body.articleId}
            })
            res.download(path)
        }
        else{
          
         res.redirect("/");
          
        }
      } catch(err) {
        console.error(err)
      }

});