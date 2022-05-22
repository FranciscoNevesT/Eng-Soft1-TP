const path = require('path');
const express = require('express');
const Sequelize = require('sequelize');

const backdirname = path.dirname(__dirname);
var router = express.Router();
const dowloadController = require('../controllers/dowload');

const sequelize = require(`${backdirname}/models/models`);


router.post('/dowload', dowloadController.postDowload);
module.exports = router;
