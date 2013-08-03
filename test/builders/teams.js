var Enums = require('../../app/enums');
var Constants = require('../../app/constants');
var Teams = require('../../app/builders/teams');
var Player = require('../../app/models/player');
var Team = require('../../app/models/team');
var should = require('should');

function testTeam(team, expectations) {

    var tally = {};

    it('should be a Team', function() {
        team.should.be.an.instanceOf(Team);
    });

    team.players.forEach(function(player) {
        tally[player.position + player.race] = tally[player.position + player.race] + 1 || 1;
    });

    expectations.forEach(function(set) {

        if (set.count > 0) {
            it('should have %1 %2 %3(s)'.replace('%1', set.count).replace('%2', Constants[set.race]).replace('%3', Constants[set.position]), function() {
                should.exist(tally[set.position + set.race]);
                tally[set.position + set.race].should.equal(set.count);
            });
        }
        else {
            it('should have 0 %1s'.replace('%1', Constants[set.position]), function() {
                should.not.exist(tally[set.position + set.race]);
            });
        }
    });
};

describe('TronTek 49ers', function() {
    testTeam(Teams.build(Enums.Teams.TRONTEK_49ERS), [
        { position: Enums.Positions.GUARD, count: 2, race: Enums.Races.HUMAN },
        { position: Enums.Positions.JACK, count: 3, race: Enums.Races.HUMAN },
        { position: Enums.Positions.STRIKER, count: 3, race: Enums.Races.HUMAN },
    ]);
});

describe('Greenmoon Smackers', function() {
    testTeam(Teams.build(Enums.Teams.GREENMOON_SMACKERS), [
        { position: Enums.Positions.GUARD, count: 3, race: Enums.Races.ORX },
        { position: Enums.Positions.JACK, count: 5, race: Enums.Races.GOBLIN },
        { position: Enums.Positions.STRIKER, count: 0 },
    ]);
});

describe('Skittersneak Stealers', function() {
    testTeam(Teams.build(Enums.Teams.SKITTERSNEAK_STEALERS), [
        { position: Enums.Positions.GUARD, count: 2, race: Enums.Races.VEERMYN },
        { position: Enums.Positions.JACK, count: 0 },
        { position: Enums.Positions.STRIKER, count: 6, race: Enums.Races.VEERMYN },
    ]);
});

describe('Midgard Delvers', function() {
    testTeam(Teams.build(Enums.Teams.MIDGARD_DELVERS), [
        { position: Enums.Positions.GUARD, count: 3, race: Enums.Races.FORGEFATHER },
        { position: Enums.Positions.JACK, count: 3, race: Enums.Races.FORGEFATHER },
        { position: Enums.Positions.STRIKER, count: 2, race: Enums.Races.FORGEFATHER },
    ]);
});