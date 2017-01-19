var mongoose = require('mongoose');

//module.exports = mongoose.model('LabName', {
//	text : {type : String, default: ''}
//});

var Schema = mongoose.Schema;

// create a schema
var labSchema = new Schema({
  labname: String,
  labtype: String,
  labarch: String,
  labstatus: String,
  labuser : String,
  goldurl: String,
  goldclassname: String,
  dcloudid: String,
  dclouduser: String,
  dcloudpass: String,
  dcloudasa: String,
  dcloudpubip: String,
  guacurl: String,
  goldpods: String,
  labguide: String,
});

// the schema is useless so far
// we need to create a model using it
var LabName = mongoose.model('LabName', labSchema);

// make this available to our users in our Node applications
module.exports = LabName;