var Enums = require('./enums');

module.exports = exports = {};

function define(name, value) {
    Object.defineProperty(exports, name, {
        enumerable: true,
        writable: false,
        configurable: false,
        value: value
    });
}

define('MAX_PLAYERS_PER_TEAM', 14);

define(Enums.Teams.TRONTEK_49ERS, 'TronTek 49ers');
define(Enums.Teams.GREENMOON_SMACKERS, 'Greenmoon Smackers');
define(Enums.Teams.SKITTERSNEAK_STEALERS, 'Skittersneak Stealers');
define(Enums.Teams.MIDGARD_DELVERS, 'Midgard Delvers');

define(Enums.Positions.GUARD, 'guard');
define(Enums.Positions.JACK, 'jack');
define(Enums.Positions.STRIKER, 'striker');

define(Enums.Races.HUMAN, 'human');
define(Enums.Races.ORX, 'orx');
define(Enums.Races.GOBLIN, 'goblin');
define(Enums.Races.VEERMYN, 'veer-myn');
define(Enums.Races.FORGEFATHER, 'forge father');

define('GUARD_ACTIONS', [
    Enums.Actions.RUN,
    Enums.Actions.SPRINT,
    Enums.Actions.DASH,
    Enums.Actions.EVADE,
    Enums.Actions.DODGE,
    Enums.Actions.SLAM,
    Enums.Actions.SLAMBACK,
    Enums.Actions.STOMP,
    Enums.Actions.DISTRACT_THE_REF,
    Enums.Actions.MOVE_ONTO_THE_PITCH,
    Enums.Actions.ARMOR_CHECK,
    Enums.Actions.STAND_UP,
    Enums.Actions.SUCKER_PUNCH
]);

define('JACK_ACTIONS', [
    Enums.Actions.RUN,
    Enums.Actions.SPRINT,
    Enums.Actions.DASH,
    Enums.Actions.PICK_UP,
    Enums.Actions.THROW,
    Enums.Actions.CATCH,
    Enums.Actions.EVADE,
    Enums.Actions.DODGE,
    Enums.Actions.SLAM,
    Enums.Actions.STEAL,
    Enums.Actions.SLAMBACK,
    Enums.Actions.STOMP,
    Enums.Actions.DISTRACT_THE_REF,
    Enums.Actions.MOVE_ONTO_THE_PITCH,
    Enums.Actions.ARMOR_CHECK,
    Enums.Actions.STAND_UP,
    Enums.Actions.SUCKER_PUNCH
]);

define('STRIKER_ACTIONS', [
    Enums.Actions.RUN,
    Enums.Actions.SPRINT,
    Enums.Actions.DASH,
    Enums.Actions.PICK_UP,
    Enums.Actions.THROW,
    Enums.Actions.CATCH,
    Enums.Actions.EVADE,
    Enums.Actions.DODGE,
    Enums.Actions.STEAL,
    Enums.Actions.DISTRACT_THE_REF,
    Enums.Actions.MOVE_ONTO_THE_PITCH,
    Enums.Actions.ARMOR_CHECK,
    Enums.Actions.STAND_UP
]);