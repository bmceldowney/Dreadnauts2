var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    key: { type: Number, default: -1 },
    html: { type: String, default: '' }
});

schema.index({ key: 1 });

module.exports = exports = mongoose.model('page', schema);
