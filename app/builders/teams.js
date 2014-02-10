var Constants = require('../constants');
var Enums = require('../enums');
var Team = require('../models/team');
var Players = require('./players');

module.exports = exports = {

    build: function(type) {

        var result = null;

        switch(type) {

            case Enums.Teams.TRONTEK49ERS:
                result = new Team();
                result.teamId = Enums.Teams.TRONTEK49ERS;
                result.name = Constants[result.teamId];
                result.dice = 1;
                result.cards = 2;
                result.add(Players.build(Enums.Players.TRONTEK49ERSGUARD, '01'));
                result.add(Players.build(Enums.Players.TRONTEK49ERSGUARD, '02'));
                result.add(Players.build(Enums.Players.TRONTEK49ERSJACK, '03'));
                result.add(Players.build(Enums.Players.TRONTEK49ERSJACK, '04'));
                result.add(Players.build(Enums.Players.TRONTEK49ERSJACK, '05'));
                result.add(Players.build(Enums.Players.TRONTEK49ERSSTRIKER, '06'));
                result.add(Players.build(Enums.Players.TRONTEK49ERSSTRIKER, '07'));
                result.add(Players.build(Enums.Players.TRONTEK49ERSSTRIKER, '08'));
                break;

            case Enums.Teams.GREENMOONSMACKERS:
                result = new Team();
                result.teamId = Enums.Teams.GREENMOONSMACKERS;
                result.name = Constants[result.teamId];
                result.dice = 1;
                result.cards = 1;
                result.add(Players.build(Enums.Players.GREENMOONSMACKERSGUARD, '01'));
                result.add(Players.build(Enums.Players.GREENMOONSMACKERSGUARD, '02'));
                result.add(Players.build(Enums.Players.GREENMOONSMACKERSGUARD, '03'));
                result.add(Players.build(Enums.Players.GREENMOONSMACKERSJACK, '04'));
                result.add(Players.build(Enums.Players.GREENMOONSMACKERSJACK, '05'));
                result.add(Players.build(Enums.Players.GREENMOONSMACKERSJACK, '06'));
                result.add(Players.build(Enums.Players.GREENMOONSMACKERSJACK, '07'));
                result.add(Players.build(Enums.Players.GREENMOONSMACKERSJACK, '08'));
                break;

            case Enums.Teams.SKITTERSNEAKSTEALERS:
                result = new Team();
                result.teamId = Enums.Teams.SKITTERSNEAKSTEALERS;
                result.name = Constants[result.teamId];
                result.dice = 0;
                result.cards = 1;
                result.add(Players.build(Enums.Players.SKITTERSNEAKSTEALERSGUARD, '01'));
                result.add(Players.build(Enums.Players.SKITTERSNEAKSTEALERSGUARD, '02'));
                result.add(Players.build(Enums.Players.SKITTERSNEAKSTEALERSSTRIKER, '03'));
                result.add(Players.build(Enums.Players.SKITTERSNEAKSTEALERSSTRIKER, '04'));
                result.add(Players.build(Enums.Players.SKITTERSNEAKSTEALERSSTRIKER, '05'));
                result.add(Players.build(Enums.Players.SKITTERSNEAKSTEALERSSTRIKER, '06'));
                result.add(Players.build(Enums.Players.SKITTERSNEAKSTEALERSSTRIKER, '07'));
                result.add(Players.build(Enums.Players.SKITTERSNEAKSTEALERSSTRIKER, '08'));
                break;

            case Enums.Teams.MIDGARDDELVERS:
                result = new Team();
                result.teamId = Enums.Teams.MIDGARDDELVERS;
                result.name = Constants[result.teamId];
                result.dice = 1;
                result.cards = 1;
                result.add(Players.build(Enums.Players.MIDGARDDELVERSGUARD, '01'));
                result.add(Players.build(Enums.Players.MIDGARDDELVERSGUARD, '02'));
                result.add(Players.build(Enums.Players.MIDGARDDELVERSGUARD, '03'));
                result.add(Players.build(Enums.Players.MIDGARDDELVERSJACK, '04'));
                result.add(Players.build(Enums.Players.MIDGARDDELVERSJACK, '05'));
                result.add(Players.build(Enums.Players.MIDGARDDELVERSJACK, '06'));
                result.add(Players.build(Enums.Players.MIDGARDDELVERSSTRIKER, '07'));
                result.add(Players.build(Enums.Players.MIDGARDDELVERSSTRIKER, '08'));
                break;

            case Enums.Teams.CHROMIUMCHARGERS:
                result = new Team();
                result.teamId = Enums.Teams.CHROMIUMCHARGERS;
                result.name = Constants[result.teamId];
                result.dice = 1;
                result.cards = 1;
                result.add(Players.build(Enums.Players.CHROMIUMCHARGERSJACK, '01'));
                result.add(Players.build(Enums.Players.CHROMIUMCHARGERSJACK, '02'));
                result.add(Players.build(Enums.Players.CHROMIUMCHARGERSJACK, '03'));
                result.add(Players.build(Enums.Players.CHROMIUMCHARGERSJACK, '04'));
                result.add(Players.build(Enums.Players.CHROMIUMCHARGERSJACK, '05'));
                result.add(Players.build(Enums.Players.CHROMIUMCHARGERSJACK, '06'));
                break;

            case Enums.Teams.LOCUSTCITYCHIEFS:
                result = new Team();
                result.teamId = Enums.Teams.LOCUSTCITYCHIEFS;
                result.name = Constants[result.teamId];
                result.dice = 1;
                result.cards = 1;
                result.add(Players.build(Enums.Players.LOCUSTCITYCHIEFSGUARD, '01'));
                result.add(Players.build(Enums.Players.LOCUSTCITYCHIEFSJACK, '02'));
                result.add(Players.build(Enums.Players.LOCUSTCITYCHIEFSJACK, '03'));
                result.add(Players.build(Enums.Players.LOCUSTCITYCHIEFSJACK, '04'));
                result.add(Players.build(Enums.Players.LOCUSTCITYCHIEFSJACK, '05'));
                result.add(Players.build(Enums.Players.LOCUSTCITYCHIEFSJACK, '06'));
                result.add(Players.build(Enums.Players.LOCUSTCITYCHIEFSSTRIKER, '07'));
                result.add(Players.build(Enums.Players.LOCUSTCITYCHIEFSSTRIKER, '08'));
                break;

            case Enums.Teams.PELGARMYSTICS:
                result = new Team();
                result.teamId = Enums.Teams.PELGARMYSTICS;
                result.name = Constants[result.teamId];
                result.dice = 0;
                result.cards = 1;
                result.add(Players.build(Enums.Players.PELGARMYSTICSSTRIKER, '01'));
                result.add(Players.build(Enums.Players.PELGARMYSTICSSTRIKER, '02'));
                result.add(Players.build(Enums.Players.PELGARMYSTICSSTRIKER, '03'));
                result.add(Players.build(Enums.Players.PELGARMYSTICSSTRIKER, '04'));
                result.add(Players.build(Enums.Players.PELGARMYSTICSSTRIKER, '05'));
                result.add(Players.build(Enums.Players.PELGARMYSTICSSTRIKER, '06'));
                result.add(Players.build(Enums.Players.PELGARMYSTICSSTRIKER, '07'));
                result.add(Players.build(Enums.Players.PELGARMYSTICSSTRIKER, '08'));
                break;

            case Enums.Teams.VOIDSIRENS:
                result = new Team();
                result.teamId = Enums.Teams.VOIDSIRENS;
                result.name = Constants[result.teamId];
                result.dice = 4;
                result.cards = 0;
                result.add(Players.build(Enums.Players.VOIDSIRENSGUARD, '01'));
                result.add(Players.build(Enums.Players.VOIDSIRENSJACK, '02'));
                result.add(Players.build(Enums.Players.VOIDSIRENSJACK, '03'));
                result.add(Players.build(Enums.Players.VOIDSIRENSJACK, '04'));
                result.add(Players.build(Enums.Players.VOIDSIRENSJACK, '05'));
                result.add(Players.build(Enums.Players.VOIDSIRENSSTRIKER, '06'));
                result.add(Players.build(Enums.Players.VOIDSIRENSSTRIKER, '07'));
                result.add(Players.build(Enums.Players.VOIDSIRENSSTRIKER, '08'));
                break;
        }
        return result;
    }
}
