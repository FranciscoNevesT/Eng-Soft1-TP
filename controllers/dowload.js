const fs = require('fs')

exports.postDeleteArticle = ((req, res, err) => {
    console.log("Trigger de dowload realizado.\n");
    // const { articleId } = req.body;
    console.log(req.body);

    path = "artigos/"+req.body.articleId+".pdf";

    try {
        if (fs.existsSync(path)) {
            res.download(path);
        }
        else{
            res.redirect("/");
        }
      } catch(err) {
        console.error(err)
      }

});