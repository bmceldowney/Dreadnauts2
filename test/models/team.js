var should = require('should');
var Team = require('../../app/models/team');
var Player = require('../../app/models/player');

describe('Team', function() {

    var team = new Team();

    it('should have a unique 32-bit id', function() {
        
        var other;
        
        team.id.should.be.a('string').and.have.property('length', 32);

        for (var i = 0; i < 1000; i++) {
            other = new Team();
            team.id.should.not.equal(other.id);
        }
    });

    it('should have a name', function() {
        team.name.should.be.a('string');
    });

    it('should have players', function() {
        team.players.should.be.an.instanceOf(Array);
    });

    it('should be able to add players', function() {

        var player = new Player();

        team.players.should.be.length(0);
        team.add(player);
        team.players.should.be.length(1);
        team.players[0].should.equal(player);
    });

    it('should be able to remove players', function() {
        team.players.should.be.length(1);
        team.remove(team.players[0].id);
        team.players.should.be.length(0);
    });
});