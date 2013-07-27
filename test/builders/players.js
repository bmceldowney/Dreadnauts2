var Enums = require('../../app/enums');
var Constants = require('../../app/constants');
var Player = require('../../app/models/player');
var Players = require('../../app/builders/players');
var should = require('should');

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

    switch (race) {

        case Enums.Races.HUMAN:
            it('should be a human', function() {
                subject.race.should.equal(Enums.Races.HUMAN);
            });
            break;

        case Enums.Races.ORX:
            it('should be an orx', function() {
                subject.race.should.equal(Enums.Races.ORX);
            });
            break;

        case Enums.Races.GOBLIN:
            it('should be a goblin', function() {
                subject.race.should.equal(Enums.Races.GOBLIN);
            });
            break;

        case Enums.Races.VEERMYN:
            it('should be a veer-myn', function() {
                subject.race.should.equal(Enums.Races.VEERMYN);
            });
            break;

        case Enums.Races.FORGEFATHER:
            it('should be a forgefather', function() {
                subject.race.should.equal(Enums.Races.FORGEFATHER);
            });
            break;
    }
};

function testPlayerPosition(subject, position) {

    switch (position) {

        case Enums.Positions.GUARD:
            it('should be a guard', function() {
                subject.position.should.equal(Enums.Positions.GUARD);
                subject.actions.should.equal(Constants.GUARD_ACTIONS);
            });
            break;

        case Enums.Positions.JACK:
            it('should be a jack', function() {
                subject.position.should.equal(Enums.Positions.JACK);
                subject.actions.should.equal(Constants.JACK_ACTIONS);
            });
            break;

        case Enums.Positions.STRIKER:
            it('should be a striker', function() {
                subject.position.should.equal(Enums.Positions.STRIKER);
                subject.actions.should.equal(Constants.STRIKER_ACTIONS);
            });
            break;
    }
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