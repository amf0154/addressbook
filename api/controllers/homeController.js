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

  module.exports = {
    index
  };