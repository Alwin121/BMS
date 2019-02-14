var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var lysuser = {
	username : String,
	email : String,
	password : String

} 
var model = mongoose.model('lysuser',new Schema(lysuser))
 module.exports = model;