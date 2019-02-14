var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var lysuser = {
	title : String,
	content : String,
	date : Date,
	author: String

} 
var model = mongoose.model('blog',new Schema(lysuser))
 module.exports = model;