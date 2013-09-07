var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: { type: String, default: 'Nobody...' },
    race: { type: Number, default: -1 },
    position: { type: Number, default: -1 },
    number: { type: String, default: '00' },
    move: { type: Number, default: -1 },
    strength: { type: Number, default: -1 },
    speed: { type: Number, default: -1 },
    skill: { type: Number, default: -1 },
    armor: { type: Number, default: -1 },
    actions: { type: Array, default: [] },
    abilities: { type: Array, default: [] },
    cost: { type: Number, default: 0 },
    experience: { type: Number, default: 0 },
    rank: { type: Number, default: 1 }
});

module.exports = exports = mongoose.model('player', schema);
