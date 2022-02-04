var mongoose = require('mongoose');

var PizzaSchema = mongoose.Schema({
    name:String,
    rating:Number
})

module.exports = mongoose.model("Pizza",PizzaSchema)
