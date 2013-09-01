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
                result.dice = 1;
                result.cards = 2;
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
                result.dice = 1;
                result.cards = 1;
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
                result.dice = 0;
                result.cards = 1;
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
                result.dice = 1;
                result.cards = 1;
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_GUARD, '01'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_GUARD, '02'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_GUARD, '03'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_JACK, '04'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_JACK, '05'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_JACK, '06'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_STRIKER, '07'));
                result.add(Players.build(Enums.Players.MIDGARD_DELVERS_STRIKER, '08'));
                break;

            case Enums.Teams.CHROMIUM_CHARGERS:
                result = new Team();
                result.name = Constants[Enums.Teams.CHROMIUM_CHARGERS];
                result.dice = 1;
                result.cards = 1;
                result.add(Players.build(Enums.Players.CHROMIUM_CHARGERS_JACK, '01'));
                result.add(Players.build(Enums.Players.CHROMIUM_CHARGERS_JACK, '02'));
                result.add(Players.build(Enums.Players.CHROMIUM_CHARGERS_JACK, '03'));
                result.add(Players.build(Enums.Players.CHROMIUM_CHARGERS_JACK, '04'));
                result.add(Players.build(Enums.Players.CHROMIUM_CHARGERS_JACK, '05'));
                result.add(Players.build(Enums.Players.CHROMIUM_CHARGERS_JACK, '06'));
                break;

            case Enums.Teams.LOCUST_CITY_CHIEFS:
                result = new Team();
                result.name = Constants[Enums.Teams.LOCUST_CITY_CHIEFS];
                result.dice = 1;
                result.cards = 1;
                result.add(Players.build(Enums.Players.LOCUST_CITY_CHIEFS_GUARD, '01'));
                result.add(Players.build(Enums.Players.LOCUST_CITY_CHIEFS_JACK, '02'));
                result.add(Players.build(Enums.Players.LOCUST_CITY_CHIEFS_JACK, '03'));
                result.add(Players.build(Enums.Players.LOCUST_CITY_CHIEFS_JACK, '04'));
                result.add(Players.build(Enums.Players.LOCUST_CITY_CHIEFS_JACK, '05'));
                result.add(Players.build(Enums.Players.LOCUST_CITY_CHIEFS_JACK, '06'));
                result.add(Players.build(Enums.Players.LOCUST_CITY_CHIEFS_STRIKER, '07'));
                result.add(Players.build(Enums.Players.LOCUST_CITY_CHIEFS_STRIKER, '08'));
                break;

            case Enums.Teams.PELGAR_MYSTICS:
                result = new Team();
                result.name = Constants[Enums.Teams.PELGAR_MYSTICS];
                result.dice = 0;
                result.cards = 1;
                result.add(Players.build(Enums.Players.PELGAR_MYSTICS_STRIKER, '01'));
                result.add(Players.build(Enums.Players.PELGAR_MYSTICS_STRIKER, '02'));
                result.add(Players.build(Enums.Players.PELGAR_MYSTICS_STRIKER, '03'));
                result.add(Players.build(Enums.Players.PELGAR_MYSTICS_STRIKER, '04'));
                result.add(Players.build(Enums.Players.PELGAR_MYSTICS_STRIKER, '05'));
                result.add(Players.build(Enums.Players.PELGAR_MYSTICS_STRIKER, '06'));
                result.add(Players.build(Enums.Players.PELGAR_MYSTICS_STRIKER, '07'));
                result.add(Players.build(Enums.Players.PELGAR_MYSTICS_STRIKER, '08'));
                break;

            case Enums.Teams.VOID_SIRENS:
                result = new Team();
                result.name = Constants[Enums.Teams.VOID_SIRENS];
                result.dice = 4;
                result.cards = 0;
                result.add(Players.build(Enums.Players.VOID_SIRENS_GUARD, '01'));
                result.add(Players.build(Enums.Players.VOID_SIRENS_JACK, '02'));
                result.add(Players.build(Enums.Players.VOID_SIRENS_JACK, '03'));
                result.add(Players.build(Enums.Players.VOID_SIRENS_JACK, '04'));
                result.add(Players.build(Enums.Players.VOID_SIRENS_JACK, '05'));
                result.add(Players.build(Enums.Players.VOID_SIRENS_STRIKER, '06'));
                result.add(Players.build(Enums.Players.VOID_SIRENS_STRIKER, '07'));
                result.add(Players.build(Enums.Players.VOID_SIRENS_STRIKER, '08'));
                break;
        }
        return result;
    }
}