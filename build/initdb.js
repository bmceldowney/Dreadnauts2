"use strict";

var mongoose = require('mongoose');
var enums = require('../app/enums');
var team = require('../app/models/team');
var teamBuilder = require('../app/builders/teams');
var teams = Object.keys(enums.Teams).map(function(key) { return enums.Teams[key]; });

mongoose.connect('mongodb://localhost/dreadnauts');

team.find().remove(function() { buildNextTeam(); });

function buildNextTeam() {
    if (teams.length > 0) {
        teamBuilder.build(teams.pop()).save(buildNextTeam);
    }
    else {
        process.exit();
    }
}
