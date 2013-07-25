var Enums = require('./enums.js');
var Player = require('./player.js');

module.exports = exports = {

    build: function(type) {

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
                    actions: [
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
                    ]
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
                    actions: [
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
                    ]
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
                    actions: [
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
                    ]
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
                    actions: [
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
                    ]
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
                    actions: [
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
                    ]
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
                    actions: [
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
                    ]
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
                    actions: [
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
                    ]
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
                    actions: [
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
                    ],
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
                    actions: [
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
                    ]
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
                    actions: [
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
                    ]
                });
                break;
        }
        return result;
    }
}