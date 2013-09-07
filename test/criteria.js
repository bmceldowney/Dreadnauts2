var Enums = require('../app/enums');
var Criteria = require('../app/criteria');
var Players = require('../app/builders/players');
var should = require('should');

var guard = Players.build(Enums.Players.GREENMOONSMACKERSGUARD);
var jack = Players.build(Enums.Players.GREENMOONSMACKERSJACK);
var striker = Players.build(Enums.Players.TRONTEK49ERSSTRIKER);
var keeper = Players.build(Enums.Players.GREENMOONSMACKERSGUARD);

jack.abilities.push(Enums.Abilities.LUCKY);

striker.abilities.push(Enums.Abilities.LUCKY);
striker.abilities.push(Enums.Abilities.REALLYLUCKY);

keeper.abilities.push(Enums.Abilities.KEEPER);

describe('Criteria.isPlayer', function() {

    it ('should return "true" if an object is a Player', function() {
        Criteria.isPlayer.test(guard).should.be.ok;
        Criteria.isPlayer.test(should).should.not.be.ok;
    });
});

describe('Criteria.isGuard', function() {

    it ('should return "true" if an object is a Guard', function() {
        Criteria.isGuard.test(guard).should.be.ok;
        Criteria.isGuard.test(striker).should.not.be.ok;
    });
});

describe('Criteria.isJack', function() {

    it ('should return "true" if an object is a Jack', function() {
        Criteria.isJack.test(jack).should.be.ok;
        Criteria.isJack.test(striker).should.not.be.ok;
    });
});

describe('Criteria.isStriker', function() {

    it ('should return "true" if an object is a Striker', function() {
        Criteria.isStriker.test(striker).should.be.ok;
        Criteria.isStriker.test(jack).should.not.be.ok;
    });
});

describe('Criteria.isKeeper', function() {

    it ('should return "true" if an object is a Keeper', function() {
        Criteria.isKeeper.test(keeper).should.be.ok;
        Criteria.isKeeper.test(guard).should.not.be.ok;
    });
});

describe('Criteria.isLucky', function() {

    it ('should return "true" if an object has the "lucky" ability', function() {
        Criteria.isLucky.test(guard).should.not.be.ok;
        Criteria.isLucky.test(jack).should.be.ok;
        Criteria.isLucky.test(striker).should.be.ok;
    });
});

describe('Criteria.isReallyLucky', function() {

    it ('should return "true" if an object has the "really lucky" ability', function() {
        Criteria.isReallyLucky.test(guard).should.not.be.ok;
        Criteria.isReallyLucky.test(jack).should.not.be.ok;
        Criteria.isReallyLucky.test(striker).should.be.ok;
    });
});
