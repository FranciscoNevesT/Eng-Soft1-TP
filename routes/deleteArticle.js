const path = require('path');
const express = require('express');
const Sequelize = require('sequelize');

const backdirname = path.dirname(__dirname);
var router = express.Router();
const deleteController = require('../controllers/delete');

const sequelize = require(`${backdirname}/models/models`);


router.post('/deletearticle', deleteController.postDeleteArticle);
module.exports = router;
