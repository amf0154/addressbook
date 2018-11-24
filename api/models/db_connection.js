var mongoose = require('mongoose');
var dbURI = 'mongodb://addrbookuser:Qwe321@ds015879.mlab.com:15879/addrbook';
mongoose.connect(dbURI,{ useNewUrlParser: true, useCreateIndex: true }, function(err){
    if(err){
        console.log("CONNECTION TO DB USERS HAS ERROR!");
    }
}); 