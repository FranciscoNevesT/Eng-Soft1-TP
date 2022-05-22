const fs = require('fs')

const sequelize = require(`../models/models`);

exports.postDowload = ((req, res, err) => {
    console.log("Trigger de dowload realizado.\n");
    // const { articleId } = req.body;
    console.log(req.body);

    artigos = sequelize.models.Artigo;
    downloads = sequelize.models.Download;

    var today = new Date();

    var month = today.getMonth()+1;
    var date = today.getFullYear()+'-'

    if(month < 10){
      date = date + "0";
    }

    date = date + (today.getMonth()+1)+'-'+today.getDate();


    path = "artigos/"+req.body.articleId+".pdf";

    try {
        if (fs.existsSync(path)) {
            artigos.increment("DOWNLOADS", {by: 1,
              where: {ID : req.body.articleId}
            })

            
            downloads.max("id").then((results) =>{
              if(results == null){
                downloads.create({
                  ID: 0,
                  Artigo_ID: req.body.articleId,
                  DATA: date
                })
              }
              else{
                downloads.create({
                  ID: results + 1,
                  Artigo_ID: req.body.articleId,
                  DATA: date
                })
              }

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