var Enums = require('../enums');
var Constants = require('../constants');
var Player = require('../models/player');

module.exports = exports = {

    build: function(type, number, name) {

        var result = null;

        switch (type) {

            case Enums.Players.TRONTEK49ERSGUARD:
                result = new Player({
                    race: Enums.Races.HUMAN,
                    position: Enums.Positions.GUARD,
                    move: 5,
                    strength: 4,
                    speed: 4,
                    skill: 4,
                    armor: 4,
                    cost: 10,
                    actions: Constants.GUARD_ACTIONS
                });
                break;

            case Enums.Players.TRONTEK49ERSJACK:
                result = new Player({
                    race: Enums.Races.HUMAN,
                    position: Enums.Positions.JACK,
                    move: 5,
                    strength: 4,
                    speed: 4,
                    skill: 4,
                    armor: 4,
                    cost: 8,
                    actions: Constants.JACK_ACTIONS
                });
                break;

            case Enums.Players.TRONTEK49ERSSTRIKER:
                result = new Player({
                    race: Enums.Races.HUMAN,
                    position: Enums.Positions.STRIKER,
                    move: 5,
                    strength: 4,
                    speed: 4,
                    skill: 4,
                    armor: 5,
                    cost: 10,
                    actions: Constants.STRIKER_ACTIONS
                });
                break;

            case Enums.Players.GREENMOONSMACKERSGUARD:
                result = new Player({
                    race: Enums.Races.ORX,
                    position: Enums.Positions.GUARD,
                    move: 5,
                    strength: 3,
                    speed: 4,
                    skill: 5,
                    armor: 4,
                    cost: 13,
                    actions: Constants.GUARD_ACTIONS
                });
                break;

            case Enums.Players.GREENMOONSMACKERSJACK:
                result = new Player({
                    race: Enums.Races.GOBLIN,
                    position: Enums.Positions.JACK,
                    move: 5,
                    strength: 5,
                    speed: 3,
                    skill: 4,
                    armor: 4,
                    cost: 9,
                    actions: Constants.JACK_ACTIONS
                });
                break;

            case Enums.Players.SKITTERSNEAKSTEALERSGUARD:
                result = new Player({
                    race: Enums.Races.VEERMYN,
                    position: Enums.Positions.GUARD,
                    move: 6,
                    strength: 4,
                    speed: 3,
                    skill: 5,
                    armor: 4,
                    cost: 12,
                    actions: Constants.GUARD_ACTIONS
                });
                break;

            case Enums.Players.SKITTERSNEAKSTEALERSSTRIKER:
                result = new Player({
                    race: Enums.Races.VEERMYN,
                    position: Enums.Positions.STRIKER,
                    move: 6,
                    strength: 4,
                    speed: 3,
                    skill: 5,
                    armor: 5,
                    cost: 11,
                    actions: Constants.STRIKER_ACTIONS
                });
                break;

            case Enums.Players.MIDGARDDELVERSGUARD:
                result = new Player({
                    race: Enums.Races.FORGEFATHER,
                    position: Enums.Positions.GUARD,
                    move: 4,
                    strength: 3,
                    speed: 5,
                    skill: 4,
                    armor: 4,
                    cost: 13,
                    actions: Constants.GUARD_ACTIONS,
                    abilities: [
                        Enums.Abilities.STEADY
                    ]
                });
                break;

            case Enums.Players.MIDGARDDELVERSJACK:
                result = new Player({
                    race: Enums.Races.FORGEFATHER,
                    position: Enums.Positions.JACK,
                    move: 4,
                    strength: 3,
                    speed: 5,
                    skill: 4,
                    armor: 4,
                    cost: 9,
                    actions: Constants.JACK_ACTIONS
                });
                break;

            case Enums.Players.MIDGARDDELVERSSTRIKER:
                result = new Player({
                    race: Enums.Races.FORGEFATHER,
                    position: Enums.Positions.STRIKER,
                    move: 4,
                    strength: 3,
                    speed: 5,
                    skill: 4,
                    armor: 5,
                    cost: 9,
                    actions: Constants.STRIKER_ACTIONS
                });
                break;

            case Enums.Players.CHROMIUMCHARGERSGUARD:
                result = new Player({
                    race: Enums.Races.ROBOT,
                    position: Enums.Positions.GUARD,
                    move: 5,
                    strength: 3,
                    speed: 5,
                    skill: 4,
                    armor: 4,
                    actions: Constants.GUARD_ACTIONS,
                    abilities: [
                        Enums.Abilities.QUICKCHANGEARTIST
                    ]
                });
                result.cost = undefined;
                break;

            case Enums.Players.CHROMIUMCHARGERSJACK:
                result = new Player({
                    race: Enums.Races.ROBOT,
                    position: Enums.Positions.JACK,
                    move: 6,
                    strength: 4,
                    speed: 4,
                    skill: 4,
                    armor: 4,
                    cost: 14,
                    actions: Constants.JACK_ACTIONS,
                    abilities: [
                        Enums.Abilities.QUICKCHANGEARTIST
                    ]
                });
                break;

            case Enums.Players.CHROMIUMCHARGERSSTRIKER:
                result = new Player({
                    race: Enums.Races.ROBOT,
                    position: Enums.Positions.STRIKER,
                    move: 5,
                    strength: 5,
                    speed: 3,
                    skill: 4,
                    armor: 5,
                    actions: Constants.STRIKER_ACTIONS,
                    abilities: [
                        Enums.Abilities.QUICKCHANGEARTIST
                    ]
                });
                result.cost = undefined;
                break;

            case Enums.Players.LOCUSTCITYCHIEFSGUARD:
                result = new Player({
                    race: Enums.Races.ZZOR,
                    position: Enums.Positions.GUARD,
                    move: 5,
                    strength: 3,
                    speed: 4,
                    skill: 5,
                    armor: 4,
                    cost: 17,
                    actions: Constants.GUARD_ACTIONS,
                    abilities: [
                        Enums.Abilities.CANTFEELATHING,
                        Enums.Abilities.STEADY
                    ]
                });
                break;

            case Enums.Players.LOCUSTCITYCHIEFSJACK:
                result = new Player({
                    race: Enums.Races.ZZOR,
                    position: Enums.Positions.JACK,
                    move: 5,
                    strength: 4,
                    speed: 4,
                    skill: 4,
                    armor: 4,
                    cost: 9,
                    actions: Constants.JACK_ACTIONS,
                    abilities: [
                        Enums.Abilities.CANTFEELATHING,
                        Enums.Abilities.SLIDE
                    ]
                });
                break;

            case Enums.Players.LOCUSTCITYCHIEFSSTRIKER:
                result = new Player({
                    race: Enums.Races.ZZOR,
                    position: Enums.Positions.STRIKER,
                    move: 6,
                    strength: 4,
                    speed: 4,
                    skill: 5,
                    armor: 5,
                    cost: 11,
                    actions: Constants.STRIKER_ACTIONS,
                    abilities: [
                        Enums.Abilities.CANTFEELATHING
                    ]
                });
                break;

            case Enums.Players.PELGARMYSTICSSTRIKER:
                result = new Player({
                    race: Enums.Races.JUDWAN,
                    position: Enums.Positions.STRIKER,
                    move: 6,
                    strength: 5,
                    speed: 3,
                    skill: 4,
                    armor: 5,
                    cost: 15,
                    actions: Constants.STRIKER_ACTIONS,
                    abilities: [
                        Enums.Abilities.PACIFIST,
                        Enums.Abilities.LONGARMS,
                        Enums.Abilities.MISDIRECT
                    ]
                });
                break;

            case Enums.Players.VOIDSIRENSGUARD:
                result = new Player({
                    race: Enums.Races.HUMAN,
                    position: Enums.Positions.GUARD,
                    move: 5,
                    strength: 4,
                    speed: 4,
                    skill: 4,
                    armor: 4,
                    cost: 10,
                    actions: Constants.GUARD_ACTIONS
                });
                break;

            case Enums.Players.VOIDSIRENSJACK:
                result = new Player({
                    race: Enums.Races.HUMAN,
                    position: Enums.Positions.JACK,
                    move: 5,
                    strength: 4,
                    speed: 4,
                    skill: 4,
                    armor: 4,
                    cost: 9,
                    actions: Constants.JACK_ACTIONS,
                    abilities: [
                        Enums.Abilities.RUNNINGINTERFERENCE
                    ]
                });
                break;

            case Enums.Players.VOIDSIRENSSTRIKER:
                result = new Player({
                    race: Enums.Races.HUMAN,
                    position: Enums.Positions.STRIKER,
                    move: 5,
                    strength: 4,
                    speed: 4,
                    skill: 4,
                    armor: 4,
                    cost: 10,
                    actions: Constants.STRIKER_ACTIONS
                });
                break;
        }

        if (number) result.number = number;
        if (name) result.name = name;

        return result;
    }
}
