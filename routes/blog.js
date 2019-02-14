var express = require('express');
var router = express.Router();
var blogModel = require('../model/blog')

router.get('/', function(req, res, next) {
	if (req.session.lys) {
		res.render('blog', { use: req.session.lys.username });
	}else{
		res.redirect('/login')
	}
  
});
router.post('/submit',(req,res)=>{
	blogModel.create({
		title:req.body.title,
		content:req.body.content,
		author:req.session.lys.username,
		date:Date.now()

	}).then(result=>{
		res.redirect("/");//跳转页面
	}).catch(error=>{
		res.render('register',{})
	})
})
router.get('/change/:id', function(req, res, next) {
	if (req.session.lys) {
		blogModel.find({
			_id:req.params.id
		}).then(result=>{
			res.render('change', { use: req.session.lys.username,list:result[0] })
		})
	}else{
		res.redirect('/login')
	}
	})
router.post('/change/:id',(req,res)=>{
	blogModel.findByIdAndUpdate(req.params.id,
	{$set:{title:req.body.title,content:req.body.content}}).then(result=>{
			res.redirect("/")
})
})
module.exports = router