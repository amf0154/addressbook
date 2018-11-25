var mongoose = require('mongoose');
var dataSchema = new mongoose.Schema({
    fio: { type: String, unique: true, required: true },
    address: { type: String, required: true },
    cellphone: { type: Number, unique: true, required: true },
    company: { type: String, required: true },
    position: { type: String, required: true },
    idgroup:  { type: Number, required: true },
    label:  { type: String, required: false },
    createdOn: { type: Date, "default": Date.now },
},{
    versionKey: false
}); 
module.exports = mongoose.model('addrbook',dataSchema);