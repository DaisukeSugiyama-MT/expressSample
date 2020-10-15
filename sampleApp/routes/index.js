var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//
router.get('/sample',function(req,res,next){
  const result = {
    result:true,
    msg:"Hello,world!"
  }
  res.json(result);
})

module.exports = router;
