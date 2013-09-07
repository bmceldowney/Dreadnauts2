var Constants = require('../constants');
var Player = require('./player');
var util = require('util');
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: { type: String, default: '' },
    players: { type: [Player.schema], default: [] },
    dice: { type: Number, default: 0 },
    cards: { type: Number, default: 0 },
    cash: { type: Number, default: 0 }
});

module.exports = exports = mongoose.model('team', schema);

exports.prototype.canAddMorePlayers = function() {
    return this.players.length < Constants.MAX_PLAYERS_PER_TEAM;
}

exports.prototype.add = function(player) {
    if (this.canAddMorePlayers()) {
        this.players.push(player);
    }
    else {
        throw new RangeError(util.format('Number of players cannot exceed %s', MAX_PLAYERS));
    }
}

exports.prototype.remove = function(playerId) {
    this.players = this.players.filter(function(player) {
        return (player.id !== playerId);
    })
}
