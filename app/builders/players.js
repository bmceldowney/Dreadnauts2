var Enums = require('../enums');
var Constants = require('../constants');
var Player = require('../models/player');

module.exports = exports = {

    build: function(type, number, name) {

        var result = null;

        switch (type) {

            case Enums.Players.TRONTEK_49ERS_GUARD:
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

            case Enums.Players.TRONTEK_49ERS_JACK:
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

            case Enums.Players.TRONTEK_49ERS_STRIKER:
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

            case Enums.Players.GREENMOON_SMACKERS_GUARD:
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

            case Enums.Players.GREENMOON_SMACKERS_JACK:
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

            case Enums.Players.SKITTERSNEAK_STEALERS_GUARD:
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

            case Enums.Players.SKITTERSNEAK_STEALERS_STRIKER:
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

            case Enums.Players.MIDGARD_DELVERS_GUARD:
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

            case Enums.Players.MIDGARD_DELVERS_JACK:
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

            case Enums.Players.MIDGARD_DELVERS_STRIKER:
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
        }

        if (number) result.number = number;
        if (name) result.name = name;

        return result;
    }
}