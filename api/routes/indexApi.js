var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/homeController');

router.get('/home/', homeCtrl.index);


module.exports = router;