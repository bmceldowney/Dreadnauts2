"use strict";

var Enums = require('../enums');
var Constants = require('../constants');
var Teams = require('../builders/teams');
var Page = require('../models/page');
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
    
    Page.findOne({ key: id }, 'html', function(err, result) {
        result = result || { html: '' };
        render(res, 'action', { action: id, description: result.html });
    });
};

exports.abilities = function(req, res) {

    var id = parseInt(req.params.id);

    Page.findOne({ key: id }, 'html', function(err, result) {
        result = result || { html: '' };
        render(res, 'ability', { ability: id, description: result.html });
    });
};

exports.search = function(req, res) {
    
    var query = req.query.q || '';
    
    Page.find({ html: RegExp(query, 'ig') }, function(err, result) {
        render(res, 'search', { results: result, query: query }); 
    });
}
