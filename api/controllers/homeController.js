var addrbook = require('../models/addrbook');
var sendJsonResponse = function(res, status, content){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(status);
    res.json(content); 
  };
   
function index (req, res, next){
    sendJsonResponse(res, 200, "homeController"); 
}

function addContact (req, res, next){
  var newNote = new addrbook();
  /*
  newNote.fio = "Medvedev Artem Nikolaevich";
  newNote.address = "Belarus, gomel, ul Kosareva 12, dom 5";
  newNote.cellphone = '55782564';
  newNote.company = "GAZPROM";
  newNote.position = "System Administrator";
  newNote.idgroup = '5';
  newNote.label = 'don\'t forget to help him';
  */
 if(req.params.fio){
  newNote.fio = req.params.fio;
  newNote.address = req.params.address;
  newNote.cellphone = req.params.cellphone;
  newNote.company = req.params.company;
  newNote.position = req.params.position;
  newNote.idgroup = req.params.idgroup;
  newNote.label = req.params.label;
  newNote.createdOn = new Date();
  newNote.save(function(err) {
    if(!err){
      res.status(200).json("it's ok! user has just been added successfully!");
    }else{
      res.status(200).json({'error_message' : 'oops, something has gone wrong...'});
    }
  }); //end save
}else{
  res.status(200).json({'error_message' : 'req params are empty'});
}
}

function getNoteById (req, res) {
  addrbook
   .findById(req.params.id)
    .exec(function(err, data){
      if(err){
          sendJsonResponse(res, 404, {'error_message' :'object with such id hasn\'t found'});   
      }else{ 
          sendJsonResponse(res, 200, data);   
      } 
    });
};

function getAllAdverts(req, res) {
  addrbook
   .find()
    .exec(function(err, data){
      if(err){
          sendJsonResponse(res, 404, {'error_message' :'objects haven\'t found'}); 
      }else{ 
          sendJsonResponse(res, 200, data);   
      } 
    });
};

  module.exports = {
    index,
    addContact,
    getNoteById,
    getAllAdverts
  };