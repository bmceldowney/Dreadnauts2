var Constants = require('../../app/constants');
var Team = require('../../app/models/team');
var Player = require('../../app/models/player');
var util = require('util');
var should = require('should');

describe('Team', function() {

    var team = new Team();

    it('should have a unique 32-bit id', function() {
        
        team.id.should.be.a('string').and.have.property('length', 32);

        for (var i = 0; i < 1000; i++) {
            team.id.should.not.equal(new Team().id);
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

    it(util.format('should not allow more than %s players', Constants.MAX_PLAYERS_PER_TEAM), function() {

        for (var i = team.MAX_PLAYERS; i >= 0; i--) {

            if (i > 0) {
                team.canAddMorePlayers().should.be.ok;
                team.add(new Player());
            }
            else {
                team.players.should.be.length(14);
                team.canAddMorePlayers().should.not.be.ok;
                (function() { team.add(new Player()) }).should.throw();
            }
        }
    });
});