var path = require('path');
var express = require('express');
var indiceRouter = express.Router();

var backdirname = path.dirname(__dirname);
const app = express();
app.use(express.static(backdirname))

indiceRouter.get("", function(req, res, next) {
    res.sendFile(path.resolve(backdirname,'./views/indice.html'));
});

module.exports = indiceRouter;
