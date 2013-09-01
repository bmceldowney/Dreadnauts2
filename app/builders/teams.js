var Constants = require('../constants');
var Enums = require('../enums');
var Team = require('../models/team');
var Players = require('./players');

module.exports = exports = {

    build: function(type) {

        var result = null;

        switch(type) {

            case Enums.Teams.TRONTEK_49ERS:
                result = new Team();
                result.name = Constants[Enums.Teams.TRONTEK_49ERS];
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_GUARD, '01'));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_GUARD, '02'));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_JACK, '03'));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_JACK, '04'));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_JACK, '05'));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_STRIKER, '06'));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_STRIKER, '07'));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_STRIKER, '08'));
                break;

            case Enums.Teams.GREENMOON_SMACKERS:
                result = new Team();
                result.name = Constants[Enums.Teams.GREENMOON_SMACKERS];
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_GUARD, '01'));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_GUARD, '02'));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_GUARD, '03'));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_JACK, '04'));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_JACK, '05'));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_JACK, '06'));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_JACK, '07'));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_JACK, '08'));
                break;

            case Enums.Teams.SKITTERSNEAK_STEALERS:
                result = new Team();
                result.name = Constants[Enums.Teams.SKITTERSNEAK_STEALERS];
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_GUARD, '01'));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_GUARD, '02'));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER, '03'));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER, '04'));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER, '05'));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER, '06'));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER, '07'));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER, '08'));
                break;

            case Enums.Teams.MIDGARD_DELVERS:
                result = new Team();
                result.name = Constants[Enums.Teams.MIDGARD_DELVERS];
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_GUARD, '01'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_GUARD, '02'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_GUARD, '03'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_JACK, '04'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_JACK, '05'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_JACK, '06'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_STRIKER, '07'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_STRIKER, '08'));
                break;
        }
        return result;
    }
}