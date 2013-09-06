var should = require('should');
var Player = require('../../app/models/player');

describe('Player', function() {

    var player = new Player();

    it('should have a unique 24-bit id', function() {
        player.id.should.be.a('string').and.have.property('length', 24);
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

    it('should have a move stat', function() {
        player.move.should.be.a('number');
    });

    it('should have a strength stat', function() {
        player.strength.should.be.a('number');
    });

    it('should have a speed stat', function() {
        player.speed.should.be.a('number');
    });

    it('should have a skill stat', function() {
        player.skill.should.be.a('number');
    });

    it('should have armor', function() {
        player.armor.should.be.a('number');
    });

    it('should have some actions', function() {
        player.actions.should.be.an.instanceOf(Array);
    });

    it('should have some abilities', function() {
        player.abilities.should.be.an.instanceOf(Array);
    });
});
