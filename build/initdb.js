"use strict";

var fs = require('fs');
var mongoose = require('mongoose');
var jade = require('jade');
var enums = require(__dirname + '/../app/enums');
var constants = require(__dirname + '/../app/constants');

var team = require(__dirname + '/../app/models/team');
var teamBuilder = require(__dirname + '/../app/builders/teams');
var teams = Object.keys(enums.Teams).map(function(key) { return enums.Teams[key]; });

var page = require(__dirname + '/../app/models/page');
var pageBuilder = require(__dirname + '/../app/builders/pages');
var pages = fs.readdirSync(__dirname + '/pages');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/dreadnauts');

team.find().remove(buildNextTeam);

function buildNextTeam() {
    if (teams.length > 0) {
        teamBuilder.build(teams.pop()).save(buildNextTeam);
    }
    else {
        page.find().remove(buildNextPage);
    }
}

function buildNextPage() {
    if (pages.length > 0) {
        
        var filename = pages.pop();
        var key = filename.split('.')[0];
        var options = {
            Enums: enums,
            Constants: constants
        }
        
        jade.renderFile(__dirname + '/pages/' + filename, options, function(err, html) {
            pageBuilder.build(key, html).save(buildNextPage);
        });
    }
    else {
        process.exit();
    }
}
