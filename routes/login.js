var express = require('express');
var router = express.Router();
var userModel = require('../model/users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express',myshow:false });
});
router.post('/',(req,res)=>{
	userModel.find(req.body).then(result=>{
		if (result.length==0) {
			res.render('login',{use : result[0]})
		}else{
			req.session.lys=result[0]
			res.redirect('/');
		}
		// res.render('index',{title:"aaa"})
		// res.redirect('/',{user:"aaa"});

	})
})
module.exports = router;
