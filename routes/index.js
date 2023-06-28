var express = require('express');
const ToyModel = require('../models/toy');
const Toy2Model = require('../models/girl');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Boy/index', async (req, res) => {
  var toys = await ToyModel.find({});
  res.render('Boy/index', { toys : toys });
});
router.get('/Girl/index', async (req, res) => {
  var toys = await Toy2Model.find({});
  res.render('Girl/index', { toys : toys });
});


module.exports = router;
