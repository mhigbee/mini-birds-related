var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sightingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  bird: { type: Schema.Types.ObjectId, ref: 'Bird'},
  confirmed: { type: Boolean, default: false },
  numberSeen: { type: Number, min: 1 }
});


module.exports = mongoose.model('Sighting', sightingSchema);
