var express = require('express');
const ToyModel = require('../models/toy');

var router = express.Router();

//search function
router.post('/boy/search', async (req, res) => {
   var keyword = req.body.keyword;
   var toys = await ToyModel.find({ name: new RegExp(keyword, "i") })
   res.render('Boy/index', { toys : toys });
});
//add function
router.get('/add', (req, res) => {
   res.render('Boy/add');
 })
 
 router.post('/Boy/add', async (req, res) => {
   var toy = req.body;
   await ToyModel.create(toy)
   .then(() => { console.log ('Add new toy succeed !')});
   res.redirect('/Boy/index');
 });
 
 // edit function
 router.get('/edit/:id', async (req, res) => {
   var toy = await ToyModel.findById(req.params.id);
   res.render('Boy/edit', { toy : toy});
 })
 
 router.post('/edit/:id', async (req, res) => {
   await ToyModel.findByIdAndUpdate(req.params.id, req.body)
   .then(() => { console.log('Edit toy succeed !') });
   res.redirect('/Boy/index');
 })


//sort function
router.get('/ascending', async (req, res) => {
   var toys = await ToyModel.find().sort({ price: 1 })
   res.render('Boy/index', { toys : toys })
});

router.get('/descending', async (req, res) => {
   var toys = await ToyModel.find().sort({ price: -1 })
   res.render('Boy/index', { toys : toys });
});


 
 // delete
 router.get('/delete/:id', async(req, res) => {
   await ToyModel.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete toy succeed !')})
   .catch((err) => { console.log ('Delete toy failed !')});
 
   res.redirect('/Boy/index');
 })
 
 router.get('/drop', async(req, res) => {
   await ToyModel.deleteMany({})
   .then(() => { console.log ('Delete all toys succeed !')});
   
   res.redirect('/Boy/index');
 })
 

module.exports = router;