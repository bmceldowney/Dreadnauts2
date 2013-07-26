var Enums = require('./enums');
var Team = require('./team');
var Players = require('./players');

module.exports = exports = {

    build: function(type) {

        var result = null;

        switch(type) {

            case Enums.Teams.TRONTEK_49ERS:
                result = new Team();
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_GUARD));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_GUARD));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_JACK));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_JACK));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_JACK));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_STRIKER));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_STRIKER));
                result.add(Players.build(Enums.Players.TRONTEK_49ERS_STRIKER));
                break;

            case Enums.Teams.GREENMOON_SMACKERS:
                result = new Team();
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_GUARD));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_GUARD));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_GUARD));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_JACK));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_JACK));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_JACK));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_JACK));
                result.add(Players.build(Enums.Players.GREENMOON_SMACKERS_JACK));
                break;

            case Enums.Teams.SKITTERSNEAK_STEALERS:
                result = new Team();
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_GUARD));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_GUARD));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER));
                result.add(Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER));
                break;

            case Enums.Teams.MIDGARD_DELVERS:
                result = new Team();
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_GUARD));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_GUARD));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_GUARD));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_JACK));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_JACK));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_JACK));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_STRIKER));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_STRIKER));
                break;
        }
        return result;
    }
}