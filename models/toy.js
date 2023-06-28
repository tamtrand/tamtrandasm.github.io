var mongoose = require('mongoose');
var ToySchema = mongoose.Schema(
   {
      name : String,
      brand : String,
      color : String,
      image : String,
      price: Number,
   }
);
var ToyModel = mongoose.model("Toy", ToySchema, "boytoy");
module.exports = ToyModel;