var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/homeController');

router.get('/home/', homeCtrl.index);
router.post('/add/', homeCtrl.addContact);
router.get('/get/:id', homeCtrl.getNoteById);
router.get('/getall/', homeCtrl.getAllAdverts);
router.get('/rem/:id', homeCtrl.deleteNoteById);
router.post('/upd/', homeCtrl.updateContact);

module.exports = router;