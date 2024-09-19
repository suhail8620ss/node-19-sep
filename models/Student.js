const mongoose = require('mongoose');
const Schema = mongoose.Schema; // schema kya hai documnt me add hone wale field.
const StudentSchema = new Schema({
     rollNo: { type: String },
     name: { type: String },
     fatherName: { type: String },
     adharCardNo: { type: String },
     mobileNo: { type: String }
})
// tabel =  cpllectopn
// rows = document 

module.exports = mongoose.model(`Student`, StudentSchema)