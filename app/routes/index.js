var Enums = require('../enums');
var Constants = require('../constants');
var Teams = require('../builders/teams');
var jade = require('jade');

function render(res, source, options, callback) {

    var options = options || {};

    options.Enums = Enums;
    options.Constants = Constants;

    res.render(source, options, callback);
};

exports.index = function(req, res){
    render(res, 'index');
};

exports.teams = function(req, res) {
    var team = Teams.build(parseInt(req.params.id));
    render(res, 'team', { team: team });
};

exports.actions = function(req, res) {

    var id = parseInt(req.params.id);
    var path = 'includes/' + id;

    render(res, path, {}, function(err, html) {
        render(res, 'action', { action: id, description: html });
    });
};

exports.abilities = function(req, res) {

    var id = parseInt(req.params.id);
    var path = 'includes/' + id;

    render(res, path, {}, function(err, html) {
        render(res, 'ability', { ability: id, description: html });
    });
};