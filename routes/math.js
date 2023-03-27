var express = require('express');
var router = express.Router();
var utils = require('../modules/utils')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/math/add");

});


/* GET home page. */
router.get('/add', function(req, res, next) {
  var result = 0
  var {num1, num2} = req.query
  if(num1 !=='' && num2 !=='') {
      result = utils.add(parseFloat(num1), parseFloat(num2))
  }
  res.render('compute', { title: 'add' ,result:result, num1, num2, symbol:"+" });

});

router.get('/divide', function(req, res, next) {
  var result = 0
  var {num1, num2} = req.query
  if(num1 !=='' && num2 !=='') {
    try {
      result = utils.divide(parseFloat(num1), parseFloat(num2))
    } catch (e) {
      result = "error"
    }
      
  }
  res.render('compute', { title: 'divide' ,result:result, num1, num2, symbol:"/" });

});

router.get('/multiply', function(req, res, next) {
  var result = 0
  var {num1, num2} = req.query
  if(num1 !=='' && num2 !=='') {
      result = utils.multiply(parseFloat(num1), parseFloat(num2))
  }
  res.render('compute', { title: 'multiply' ,result:result, num1, num2, symbol:"*" });

});


router.get('/subtract', function(req, res, next) {
  var result = 0
  var {num1, num2} = req.query
  console.log(req.query)
  if(num1 !=='' && num2 !=='') {
      result = utils.subtract(parseFloat(num1), parseFloat(num2))
  }
  res.render('compute', { title: 'subtract' ,result:result, num1, num2, symbol:"-" });

});

router.get('/rockPaperScissors', function(req, res, next) {
  var result = 0
  var {player1, player2} = req.query
  console.log(req.query)

  result = utils.rockPaperScissors(player1, player2) 

  res.render('compute', { title: 'rockPaperScissors' ,result:result, player1, player2, symbol:" Vs "});  

});

module.exports = router;
