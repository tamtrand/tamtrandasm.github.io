var express = require('express');
const Toy2Model = require('../models/girl');
var router = express.Router();



//search function
router.post('/search', async (req, res) => {
   var keyword = req.body.keyword;
   var toys = await Toy2Model.find({ name: new RegExp(keyword, "i") })
   res.render('Girl/index', { toys : toys });
});

//sort function
router.get('/ascending', async (req, res) => {
   var toys = await Toy2Model.find().sort({ price: 1 })
   res.render('Girl/index', { toys : toys })
});

router.get('/descending', async (req, res) => {
   var toys = await Toy2Model.find().sort({ price: -1 })
   res.render('Girl/index', { toys : toys });
});

// add function
router.get('/add', (req, res) => {
   res.render('Girl/add');
 })
 
 router.post('/Girl/add', async (req, res) => {
   var toy = req.body;
   await Toy2Model.create(toy)
   .then(() => { console.log ('Add new toy succeed !')});
   res.redirect('/Girl/index');
 });

// delete
router.get('/delete/:id', async(req, res) => {
   await Toy2Model.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete toy succeed !')})
   .catch((err) => { console.log ('Delete toy failed !')});
 
   res.redirect('/Girl/index');
 })
 
 router.get('/drop', async(req, res) => {
   await Toy2Model.deleteMany({})
   .then(() => { console.log ('Delete all toys succeed !')});
   
   res.redirect('/Girl/index');
 })

module.exports = router;