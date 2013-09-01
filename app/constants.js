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

define(Enums.Abilities.SAFE_PAIR_OF_HANDS, 'A Safe Pair of Hands');
define(Enums.Abilities.BACKFLIP, 'Backflip');
define(Enums.Abilities.CANT_FEEL_A_THING, 'Can\'t Feel a Thing');
define(Enums.Abilities.DOES_THIS_HURT, 'Does This Hurt');
define(Enums.Abilities.GOTCHA, 'Gotcha');
define(Enums.Abilities.GRIZZLED, 'Grizzled');
define(Enums.Abilities.JUMP, 'Jump');
define(Enums.Abilities.KEEPER, 'Keeper');
define(Enums.Abilities.LUCKY, 'Lucky');
define(Enums.Abilities.REALLY_LUCKY, 'Really Lucky');
define(Enums.Abilities.MIND_LIKE_WATER, 'Mind Like Water');
define(Enums.Abilities.ROLL, 'Roll');
define(Enums.Abilities.RUNNING_INTERFERENCE, 'Running Interference');
define(Enums.Abilities.STEADY, 'Steady');

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