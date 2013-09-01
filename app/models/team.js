var Enums = require('../enums');
var Constants = require('../constants');
var Player = require('./player');
var hat = require('hat');
var util = require('util');

module.exports = exports = function(template) {

    var template = template || {};
    
    this.id = template.id || hat();
    this.name = template.name || '';
    this.players = [];
    this.dice = template.dice || 0;
    this.cards = template.cards || 0;
    this.cash = template.cash || 0;
}

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