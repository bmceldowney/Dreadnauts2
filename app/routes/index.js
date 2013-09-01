var Enums = require('../enums');
var Constants = require('../constants');
var Teams = require('../builders/teams');

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