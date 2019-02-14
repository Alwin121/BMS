var express = require('express');
var router = express.Router();
var userModel = require('../model/users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.post('/', function(req, res, next) {
  	userModel.create(req.body).then(result=>{
		res.redirect("/");//跳转页面
	}).catch(error=>{
		res.render('register', { title: 'Express' })
	})
});
router.get("/check",(req,res)=>{

  userModel.find({req.query}).then(result=>{
    if(result.length==0){
      res.send({ok:0}) //没有重名用户
    }else{
      res.send({ok:1})
    }
  })
})
module.exports = router;
