var express = require('express');
var router = express.Router();
var blogModel = require('../model/blog');


router.get('/', function(req, res, next) {
	if (req.session.lys) {
		blogModel.find({
			author:req.session.lys.username
		},{
			content:0
		},{
			sort:{title:1}
		}).then(result=>{
			console.log(result)
			res.render('index', { use: req.author,list:result,handleDate:function(data){
  				var d = new Date(data)
  				var year = d.getFullYear();
  				var month = d.getMonth()+1;
  				var day = d.getDate()
  				return year+"年"+month+"月"+day+"日";
  			}}); 
		})
		
	}else{
		res.redirect('/login')
	}
  
});
router.get('/loginout', function(req, res, next) {
	req.session.destroy(()=>{
		res.redirect("/login");
	})
  
});
router.get('/detail', function(req, res, next) {
	if (req.session.lys) {
		blogModel.find({
			_id:req.query.id
		}).then(result=>{
			res.render('detail', {list:result[0]});
		})
		
	}else{
		res.redirect('/login')
	}

  
});
router.get('/remove/:lys', function(req, res, next) {
	if (req.session.lys) {
		blogModel.remove({
			_id:req.params.lys
		}).then(result=>{
			res.redirect('/'); 
		})
		
	}else{
		res.redirect('/login')
	}
  
});
module.exports = router;
