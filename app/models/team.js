var Enums = require('../enums');
var Player = require('./player');
var hat = require('hat');

module.exports = exports = function(template) {

    var template = template || {};
    
    this.id = template.id || hat();
    this.name = template.name || '';
    this.players = [];
}

exports.prototype.add = function(player) {
    this.players.push(player);
}

exports.prototype.remove = function(playerId) {
    this.players = this.players.filter(function(player) {
        return (player.id !== playerId);
    })
}