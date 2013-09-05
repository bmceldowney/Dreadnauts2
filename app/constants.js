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
define(Enums.Teams.CHROMIUM_CHARGERS, 'Chromium Chargers');
define(Enums.Teams.LOCUST_CITY_CHIEFS, 'Locust City Chiefs');
define(Enums.Teams.PELGAR_MYSTICS, 'Pelgar Mystics');
define(Enums.Teams.VOID_SIRENS, 'Void Sirens');

define(Enums.Positions.GUARD, 'Guard');
define(Enums.Positions.JACK, 'Jack');
define(Enums.Positions.STRIKER, 'Striker');
define(Enums.Positions.KEEPER, 'Keeper');

define(Enums.Races.HUMAN, 'Human');
define(Enums.Races.ORX, 'Orx');
define(Enums.Races.GOBLIN, 'Goblin');
define(Enums.Races.VEERMYN, 'Veer-Myn');
define(Enums.Races.FORGEFATHER, 'Forge Father');
define(Enums.Races.ROBOT, 'Robot');
define(Enums.Races.ZZOR, 'Z\'zor');
define(Enums.Races.JUDWAN, 'Judwan');

define(Enums.Actions.RUN, 'Run');
define(Enums.Actions.SPRINT, 'Sprint');
define(Enums.Actions.DASH, 'Dash');
define(Enums.Actions.PICK_UP, 'Pick Up the Ball');
define(Enums.Actions.THROW, 'Throw');
define(Enums.Actions.CATCH, 'Catch');
define(Enums.Actions.EVADE, 'Evade');
define(Enums.Actions.DODGE, 'Dodge');
define(Enums.Actions.SLAM, 'Slam');
define(Enums.Actions.STEAL, 'Steal');
define(Enums.Actions.SLAMBACK, 'Slamback');
define(Enums.Actions.STOMP, 'Stomp');
define(Enums.Actions.DISTRACT_THE_REF, 'Distract the Ref');
define(Enums.Actions.MOVE_ONTO_THE_PITCH, 'Move onto the Pitch');
define(Enums.Actions.ARMOR_CHECK, 'Armor Check');
define(Enums.Actions.STAND_UP, 'Stand Up');
define(Enums.Actions.SUCKER_PUNCH, 'Sucker Punch');
define(Enums.Actions.JUMP, 'Jump');
define(Enums.Actions.PUNT, 'Punt');
define(Enums.Actions.TRANSFORM, 'Transform');
define(Enums.Actions.FEINT, 'Feint');
define(Enums.Actions.REF_CHECK, 'Ref Check');
define(Enums.Actions.STALL, 'Stall');
define(Enums.Actions.SNEAK, 'Sneak');

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
define(Enums.Abilities.THREESIXTY_VISION, '360 Vision');
define(Enums.Abilities.ALERT, 'Alert');
define(Enums.Abilities.DIRTY_TRICKS, 'Dirty Tricks');
define(Enums.Abilities.DUCK_AND_WEAVE, 'Duck and Weave');
define(Enums.Abilities.EVEN_THE_ODDS, 'Even the Odds');
define(Enums.Abilities.LONG_ARMS, 'Long Arms');
define(Enums.Abilities.MISDIRECT, 'Misdirect');
define(Enums.Abilities.PACIFIST, 'Pacifist');
define(Enums.Abilities.PRIMA_DONNA, 'Prima Donna');
define(Enums.Abilities.QUICK_CHANGE_ARTIST, 'Quick Change Artist');
define(Enums.Abilities.QUICK_RECOVERY, 'Quick Recovery');
define(Enums.Abilities.SHOW_OFF, 'Show Off');
define(Enums.Abilities.SLIDE, 'Slide');
define(Enums.Abilities.STRETCH, 'Stretch');

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
