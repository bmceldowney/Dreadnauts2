var Enums = require('../enums');
var hat = require('hat');

module.exports = exports = function(template) {

    var template = template || {};
    
    this.id = template.id || hat();
    this.name = template.name || 'Nobody...';
    this.race = template.race || -1;
    this.position = template.position || -1;
    this.number = template.number || '00';
    this.move = template.move || -1;
    this.strength = template.strength || -1;
    this.speed = template.speed || -1;
    this.skill = template.skill || -1;
    this.armor = template.armor || -1;
    this.actions = template.actions || [];
    this.abilities = template.abilities || [];
}