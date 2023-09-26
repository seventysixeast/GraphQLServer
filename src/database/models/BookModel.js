const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({

   title: String,
   author: String

});

module.exports.book = bookSchema;