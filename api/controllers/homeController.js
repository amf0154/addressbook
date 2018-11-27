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
  if(req.body.fio){
  newNote.fio = req.body.fio;
  newNote.address = req.body.address;
  newNote.cellphone = req.body.cellphone;
  newNote.company = req.body.company;
  newNote.position = req.body.position;
  newNote.idgroup = req.body.idgroup;
  newNote.label = req.body.label;
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