var should = require('should');
var Player = require('../player');

describe('Player', function() {

    var player = new Player();

    it('should have a unique 32-bit id', function() {
        player.id.should.be.a('string').and.have.property('length', 32);
    });

    it('should have a name', function() {
        player.name.should.be.a('string');
    });

    it('should have a race', function() {
        player.race.should.be.a('number');
    });

    it('should have a position', function() {
        player.position.should.be.a('number');
    });

    it('should have a move', function() {
        player.move.should.be.a('number');
    });

    it('should have a strength', function() {
        player.strength.should.be.a('number');
    });

    it('should have a speed', function() {
        player.speed.should.be.a('number');
    });

    it('should have a skill', function() {
        player.skill.should.be.a('number');
    });

    it('should have a armor', function() {
        player.armor.should.be.a('number');
    });

    it('should have a actions', function() {
        player.actions.should.be.an.instanceOf(Array);
    });

    it('should have a abilities', function() {
        player.abilities.should.be.an.instanceOf(Array);
    });
});