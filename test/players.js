var should = require('should');
var Enums = require('../enums');
var Player = require('../player');
var Players = require('../players');

function testPlayerStats(player, move, strength, speed, skill, armor) {

    it('should have * move'.replace('*', move), function() {
        player.move.should.equal(move);
    });

    it('should have * strength'.replace('*', strength), function() {
        player.strength.should.equal(strength);
    });

    it('should have * speed'.replace('*', speed), function() {
        player.speed.should.equal(speed);
    });

    it('should have * skill'.replace('*', skill), function() {
        player.skill.should.equal(skill);
    });

    it('should have * armor'.replace('*', armor), function() {
        player.armor.should.equal(armor);
    });
}

describe('TronTek 49ers Guard', function() {
    var player = Players.build(Enums.Players.TRONTEK_49ERS_GUARD);
    it('should be human', function() { player.race.should.equal(Enums.Races.HUMAN) });
    it('should be a guard', function() { player.position.should.equal(Enums.Positions.GUARD) });
    testPlayerStats(player, 5, 4, 4, 4, 4);
});

describe('TronTek 49ers Jack', function() {
    var player = Players.build(Enums.Players.TRONTEK_49ERS_JACK);
    it('should be human', function() { player.race.should.equal(Enums.Races.HUMAN) });
    it('should be a jack', function() { player.position.should.equal(Enums.Positions.JACK) });
    testPlayerStats(player, 5, 4, 4, 4, 4);
});

describe('TronTek 49ers Striker', function() {
    var player = Players.build(Enums.Players.TRONTEK_49ERS_STRIKER);
    it('should be human', function() { player.race.should.equal(Enums.Races.HUMAN) });
    it('should be a striker', function() { player.position.should.equal(Enums.Positions.STRIKER) });
    testPlayerStats(player, 5, 4, 4, 4, 5);
});

describe('Greenmoon Smackers Guard', function() {
    var player = Players.build(Enums.Players.GREENMOON_SMACKERS_GUARD);
    it('should be an orx', function() { player.race.should.equal(Enums.Races.ORX) });
    it('should be a guard', function() { player.position.should.equal(Enums.Positions.GUARD) });
    testPlayerStats(player, 5, 3, 4, 5, 4);
});

describe('Greenmoon Smackers Jack', function() {
    var player = Players.build(Enums.Players.GREENMOON_SMACKERS_JACK);
    it('should be a goblin', function() { player.race.should.equal(Enums.Races.GOBLIN) });
    it('should be a jack', function() { player.position.should.equal(Enums.Positions.JACK) });
    testPlayerStats(player, 5, 5, 3, 4, 4);
});

describe('Greenmoon Smackers Striker', function() {
    var player = Players.build(Enums.Players.GREENMOON_SMACKERS_STRIKER);
    it('should not exist', function() { should.not.exist(player) });
});

describe('Skittersneak Stealers Guard', function() {
    var player = Players.build(Enums.Players.SKITTERSNEAK_STEALERS_GUARD);
    it('should be veer-myn', function() { player.race.should.equal(Enums.Races.VEERMYN) });
    it('should be a guard', function() { player.position.should.equal(Enums.Positions.GUARD) });
    testPlayerStats(player, 6, 4, 3, 5, 4);
});

describe('Skittersneak Stealers Jack', function() {
    var player = Players.build(Enums.Players.SKITTERSNEAK_STEALERS_JACK);
    it('should not exist', function() { should.not.exist(player) });
});

describe('Skittersneak Stealers Striker', function() {
    var player = Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER);
    it('should be a veer-myn', function() { player.race.should.equal(Enums.Races.VEERMYN) });
    it('should be a striker', function() { player.position.should.equal(Enums.Positions.STRIKER) });
    testPlayerStats(player, 6, 4, 3, 5, 5);
});

describe('Midgard Delvers Guard', function() {
    var player = Players.build(Enums.Players.MIDGARD_DELVERS_GUARD);
    it('should be forgefather', function() { player.race.should.equal(Enums.Races.FORGEFATHER) });
    it('should be a guard', function() { player.position.should.equal(Enums.Positions.GUARD) });
    testPlayerStats(player, 4, 3, 5, 4, 4);
    it('should have the "steady" ability', function() { player.abilities.should.include(Enums.Abilities.STEADY); })
});

describe('Midgard Delvers Jack', function() {
    var player = Players.build(Enums.Players.MIDGARD_DELVERS_JACK);
    it('should be forgefather', function() { player.race.should.equal(Enums.Races.FORGEFATHER) });
    it('should be a jack', function() { player.position.should.equal(Enums.Positions.JACK) });
    testPlayerStats(player, 4, 3, 5, 4, 4);
});

describe('Midgard Delvers Striker', function() {
    var player = Players.build(Enums.Players.MIDGARD_DELVERS_STRIKER);
    it('should be forgefather', function() { player.race.should.equal(Enums.Races.FORGEFATHER) });
    it('should be a striker', function() { player.position.should.equal(Enums.Positions.STRIKER) });
    testPlayerStats(player, 4, 3, 5, 4, 5);
});