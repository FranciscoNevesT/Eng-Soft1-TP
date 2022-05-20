
const express = require('express');
var router = express.Router();
const errorController = require('../controllers/error.js');

router.use(errorController.getPage404);
module.exports = router;
