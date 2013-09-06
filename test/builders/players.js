var Enums = require('../../app/enums');
var Constants = require('../../app/constants');
var Player = require('../../app/models/player');
var Players = require('../../app/builders/players');
var should = require('should');
var util = require('util');

describe('TronTek 49ers Guard', function() {
    var subject = Players.build(Enums.Players.TRONTEK_49ERS_GUARD);
    testPlayer(subject, Enums.Races.HUMAN, Enums.Positions.GUARD, 5, 4, 4, 4, 4);
});

describe('TronTek 49ers Jack', function() {
    var subject = Players.build(Enums.Players.TRONTEK_49ERS_JACK);
    testPlayer(subject, Enums.Races.HUMAN, Enums.Positions.JACK, 5, 4, 4, 4, 4);
});

describe('TronTek 49ers Striker', function() {
    var subject = Players.build(Enums.Players.TRONTEK_49ERS_STRIKER);
    testPlayer(subject, Enums.Races.HUMAN, Enums.Positions.STRIKER, 5, 4, 4, 4, 5);
});

describe('Greenmoon Smackers Guard', function() {
    var subject = Players.build(Enums.Players.GREENMOON_SMACKERS_GUARD);
    testPlayer(subject, Enums.Races.ORX, Enums.Positions.GUARD, 5, 3, 4, 5, 4);
});

describe('Greenmoon Smackers Jack', function() {
    var subject = Players.build(Enums.Players.GREENMOON_SMACKERS_JACK);
    testPlayer(subject, Enums.Races.GOBLIN, Enums.Positions.JACK, 5, 5, 3, 4, 4);
});

describe('Greenmoon Smackers Striker', function() {
    var subject = Players.build(Enums.Players.GREENMOON_SMACKERS_STRIKER);
    testPlayer(subject, null);
});

describe('Skittersneak Stealers Guard', function() {
    var subject = Players.build(Enums.Players.SKITTERSNEAK_STEALERS_GUARD);
    testPlayer(subject, Enums.Races.VEERMYN, Enums.Positions.GUARD, 6, 4, 3, 5, 4);
});

describe('Skittersneak Stealers Jack', function() {
    var subject = Players.build(Enums.Players.SKITTERSNEAK_STEALERS_JACK);
    testPlayer(subject, null);
});

describe('Skittersneak Stealers Striker', function() {
    var subject = Players.build(Enums.Players.SKITTERSNEAK_STEALERS_STRIKER);
    testPlayer(subject, Enums.Races.VEERMYN, Enums.Positions.STRIKER, 6, 4, 3, 5, 5);
});

describe('Midgard Delvers Guard', function() {
    var subject = Players.build(Enums.Players.MIDGARD_DELVERS_GUARD);
    testPlayer(subject, Enums.Races.FORGEFATHER, Enums.Positions.GUARD, 4, 3, 5, 4, 4);
    it('should have the "steady" ability', function() {
        subject.abilities.should.include(Enums.Abilities.STEADY);
    });
});

describe('Midgard Delvers Jack', function() {
    var subject = Players.build(Enums.Players.MIDGARD_DELVERS_JACK);
    testPlayer(subject, Enums.Races.FORGEFATHER, Enums.Positions.JACK, 4, 3, 5, 4, 4);
});

describe('Midgard Delvers Striker', function() {
    var subject = Players.build(Enums.Players.MIDGARD_DELVERS_STRIKER);
    testPlayer(subject, Enums.Races.FORGEFATHER, Enums.Positions.STRIKER, 4, 3, 5, 4, 5);
});

function testPlayer(subject, race, position, move, strength, speed, skill, armor) {

    if (race == null) {
        it('should not exist', function() {
            should.not.exist(subject);
        });
    }
    else {
        testPlayerRace(subject, race);
        testPlayerPosition(subject, position);
        testPlayerStats(subject, move, strength, speed, skill, armor);
    }
};

function testPlayerRace(subject, race) {

    it(util.format('should be a(n) %s', Constants[race]), function() {
        subject.race.should.equal(race);
    });
};

function testPlayerPosition(subject, position) {

    it(util.format('should be a %s', Constants[position]), function() {
        subject.position.should.equal(position);

        switch (position) {

            case Enums.Positions.GUARD:
                subject.actions.join().should.eql(Constants.GUARD_ACTIONS.join());
                break;

            case Enums.Positions.JACK:
                subject.actions.join().should.eql(Constants.JACK_ACTIONS.join());
                break;

            case Enums.Positions.STRIKER:
                subject.actions.join().should.eql(Constants.STRIKER_ACTIONS.join());
                break;
        }
    });
};

function testPlayerStats(subject, move, strength, speed, skill, armor) {

    it('should have * move'.replace('*', move), function() {
        subject.move.should.equal(move);
    });

    it('should have * strength'.replace('*', strength), function() {
        subject.strength.should.equal(strength);
    });

    it('should have * speed'.replace('*', speed), function() {
        subject.speed.should.equal(speed);
    });

    it('should have * skill'.replace('*', skill), function() {
        subject.skill.should.equal(skill);
    });

    it('should have * armor'.replace('*', armor), function() {
        subject.armor.should.equal(armor);
    });
};
