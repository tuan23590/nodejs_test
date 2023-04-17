const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Course = new Schema({
    name: {type:String, default: ''},
    dep: {type: String},
    img: {type: String}
  });
module.exports = mongoose.model('Course',Course);