const express = require('express');
var router = express.Router();
const deleteController = require('../controllers/delete.js');

router.post('/deletearticle', deleteController.postDeleteArticle);
module.exports = router;
