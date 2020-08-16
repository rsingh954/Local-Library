let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GenreSchema = new Schema ({
  name : {type: String, required: true, max: 100, min: 3 }
})
// Virtual for this genre instance URL.
GenreSchema
.virtual('url')
.get(function (){
  return '/catalog/genre/' + this._id;
})

module.exports = mongoose.model("Genre", GenreSchema)