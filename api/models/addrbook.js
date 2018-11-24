var mongoose = require('mongoose');
var dataSchema = new mongoose.Schema({
    fio: String,
    address: String,
    cellphone: Number,
    company: String,
    position: String,
    idgroup: Number,
    label: String,
    createdOn: {
        type: Date,
        "default": Date.now
    }
}); 
module.exports = mongoose.model('addrbook',dataSchema);