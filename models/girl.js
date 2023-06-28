var mongoose = require('mongoose');
var GirlSchema = mongoose.Schema(
   {
      name : String,
      brand : String,
      color : String,
      image : String,
      price: Number,    
   }
);
var Toy2Model = mongoose.model("Girl", GirlSchema, "girltoy");
module.exports = Toy2Model;