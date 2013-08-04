var Enums = require('./enums');
var Player = require('./models/player');
var Criterion = require('./utils/criterion');

module.exports = exports = {};

function define(name, value) {
    Object.defineProperty(exports, name, {
        enumerable: true,
        writable: false,
        configurable: false,
        value: value
    });
}

define('isPlayer', new Criterion(function(subject) {
    return subject instanceof Player;
}));

define('isGuard', exports.isPlayer.and(new Criterion(function(subject) {
    return subject.position === Enums.Positions.GUARD;
})));

define('isJack', exports.isPlayer.and(new Criterion(function(subject) {
    return subject.position === Enums.Positions.JACK;
})));

define('isStriker', exports.isPlayer.and(new Criterion(function(subject) {
    return subject.position === Enums.Positions.STRIKER;
})));

define('isKeeper', exports.isGuard.and(new Criterion(function(subject) {
    return subject.abilities.some(function(ability) {
        return ability === Enums.Abilities.KEEPER;
    });
})));

define('isLucky', exports.isPlayer.and(new Criterion(function(subject) {
    return subject.abilities.some(function(ability) {
        return ability === Enums.Abilities.LUCKY;
    });
})));

define('isReallyLucky', exports.isLucky.and(new Criterion(function(subject) {
    return subject.abilities.some(function(ability) {
        return ability === Enums.Abilities.REALLY_LUCKY;
    });
})));