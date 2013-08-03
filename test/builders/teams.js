var Enums = require('../../app/enums');
var Constants = require('../../app/constants');
var Teams = require('../../app/builders/teams');
var Player = require('../../app/models/player');
var Team = require('../../app/models/team');
var util = require('util');
var should = require('should');

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

function testTeam(team, expectations) {

    var tally = {};

    it('should be a Team', function() {
        team.should.be.an.instanceOf(Team);
    });

    team.players.forEach(function(player) {
        tally[player.position + player.race] = tally[player.position + player.race] + 1 || 1;
    });

    expectations.forEach(function(set) {

        var spec;

        if (set.count > 0) {
            spec = util.format('should have %s %s %s(s)', set.count, Constants[set.race], Constants[set.position]);
            it(spec, function() {
                should.exist(tally[set.position + set.race]);
                tally[set.position + set.race].should.equal(set.count);
            });
        }
        else {
            spec = util.format('should have 0 %ss', Constants[set.position]);
            it(spec, function() {
                should.not.exist(tally[set.position + set.race]);
            });
        }
    });
};