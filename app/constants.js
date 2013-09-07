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

define(Enums.Teams.TRONTEK49ERS, 'TronTek 49ers');
define(Enums.Teams.GREENMOONSMACKERS, 'Greenmoon Smackers');
define(Enums.Teams.SKITTERSNEAKSTEALERS, 'Skittersneak Stealers');
define(Enums.Teams.MIDGARDDELVERS, 'Midgard Delvers');
define(Enums.Teams.CHROMIUMCHARGERS, 'Chromium Chargers');
define(Enums.Teams.LOCUSTCITYCHIEFS, 'Locust City Chiefs');
define(Enums.Teams.PELGARMYSTICS, 'Pelgar Mystics');
define(Enums.Teams.VOIDSIRENS, 'Void Sirens');

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
define(Enums.Actions.PICKUP, 'Pick Up the Ball');
define(Enums.Actions.THROW, 'Throw');
define(Enums.Actions.CATCH, 'Catch');
define(Enums.Actions.EVADE, 'Evade');
define(Enums.Actions.DODGE, 'Dodge');
define(Enums.Actions.SLAM, 'Slam');
define(Enums.Actions.STEAL, 'Steal');
define(Enums.Actions.SLAMBACK, 'Slamback');
define(Enums.Actions.STOMP, 'Stomp');
define(Enums.Actions.DISTRACTTHEREF, 'Distract the Ref');
define(Enums.Actions.MOVEONTOTHEPITCH, 'Move onto the Pitch');
define(Enums.Actions.ARMORCHECK, 'Armor Check');
define(Enums.Actions.STANDUP, 'Stand Up');
define(Enums.Actions.SUCKERPUNCH, 'Sucker Punch');
define(Enums.Actions.JUMP, 'Jump');
define(Enums.Actions.PUNT, 'Punt');
define(Enums.Actions.TRANSFORM, 'Transform');
define(Enums.Actions.FEINT, 'Feint');
define(Enums.Actions.REFCHECK, 'Ref Check');
define(Enums.Actions.STALL, 'Stall');
define(Enums.Actions.SNEAK, 'Sneak');

define(Enums.Abilities.SAFEPAIROFHANDS, 'A Safe Pair of Hands');
define(Enums.Abilities.BACKFLIP, 'Backflip');
define(Enums.Abilities.CANTFEELATHING, 'Can\'t Feel a Thing');
define(Enums.Abilities.DOESTHISHURT, 'Does This Hurt');
define(Enums.Abilities.GOTCHA, 'Gotcha');
define(Enums.Abilities.GRIZZLED, 'Grizzled');
define(Enums.Abilities.JUMP, 'Jump');
define(Enums.Abilities.KEEPER, 'Keeper');
define(Enums.Abilities.LUCKY, 'Lucky');
define(Enums.Abilities.REALLYLUCKY, 'Really Lucky');
define(Enums.Abilities.MINDLIKEWATER, 'Mind Like Water');
define(Enums.Abilities.ROLL, 'Roll');
define(Enums.Abilities.RUNNINGINTERFERENCE, 'Running Interference');
define(Enums.Abilities.STEADY, 'Steady');
define(Enums.Abilities.THREESIXTYVISION, '360 Vision');
define(Enums.Abilities.ALERT, 'Alert');
define(Enums.Abilities.DIRTYTRICKS, 'Dirty Tricks');
define(Enums.Abilities.DUCKANDWEAVE, 'Duck and Weave');
define(Enums.Abilities.EVENTHEODDS, 'Even the Odds');
define(Enums.Abilities.LONGARMS, 'Long Arms');
define(Enums.Abilities.MISDIRECT, 'Misdirect');
define(Enums.Abilities.PACIFIST, 'Pacifist');
define(Enums.Abilities.PRIMADONNA, 'Prima Donna');
define(Enums.Abilities.QUICKCHANGEARTIST, 'Quick Change Artist');
define(Enums.Abilities.QUICKRECOVERY, 'Quick Recovery');
define(Enums.Abilities.SHOWOFF, 'Show Off');
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
    Enums.Actions.DISTRACTTHEREF,
    Enums.Actions.MOVEONTOTHEPITCH,
    Enums.Actions.ARMORCHECK,
    Enums.Actions.STANDUP,
    Enums.Actions.SUCKERPUNCH
]);

define('JACK_ACTIONS', [
    Enums.Actions.RUN,
    Enums.Actions.SPRINT,
    Enums.Actions.DASH,
    Enums.Actions.PICKUP,
    Enums.Actions.THROW,
    Enums.Actions.CATCH,
    Enums.Actions.EVADE,
    Enums.Actions.DODGE,
    Enums.Actions.SLAM,
    Enums.Actions.STEAL,
    Enums.Actions.SLAMBACK,
    Enums.Actions.STOMP,
    Enums.Actions.DISTRACTTHEREF,
    Enums.Actions.MOVEONTOTHEPITCH,
    Enums.Actions.ARMORCHECK,
    Enums.Actions.STANDUP,
    Enums.Actions.SUCKERPUNCH
]);

define('STRIKER_ACTIONS', [
    Enums.Actions.RUN,
    Enums.Actions.SPRINT,
    Enums.Actions.DASH,
    Enums.Actions.PICKUP,
    Enums.Actions.THROW,
    Enums.Actions.CATCH,
    Enums.Actions.EVADE,
    Enums.Actions.DODGE,
    Enums.Actions.STEAL,
    Enums.Actions.DISTRACTTHEREF,
    Enums.Actions.MOVEONTOTHEPITCH,
    Enums.Actions.ARMORCHECK,
    Enums.Actions.STANDUP
]);
