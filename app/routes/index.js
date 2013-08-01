var Enums = require('../enums');
var Constants = require('../constants');
var Teams = require('../builders/teams');

exports.index = function(req, res){
    res.render('index', {});
};

exports.styleguide = function(req, res){
    var team = Teams.build(Enums.Teams.MIDGARD_DELVERS);
    res.render('styleguide', { Constants: Constants, team: team });
};