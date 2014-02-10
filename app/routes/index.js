"use strict";

var Enums = require('../enums');
var Constants = require('../constants');
var Teams = require('../builders/teams');
var Page = require('../models/page');
var jade = require('jade');
var fetcher = require('../data/fetcher');

function render(res, source, options, callback) {

    var options = options || {};

    options.Enums = Enums;
    options.Constants = Constants;

    res.render(source, options, callback);
};

exports.index = function(req, res){
    render(res, 'index');
};

exports.heartbeat = function(req, res) {
    res.send(200);
};

exports.constants = function(req, res) {
    res.json({Enums: Enums, Constants: Constants});
};

exports.teams = function(req, res) {
    var team = Teams.build(parseInt(req.params.id));

    debugger;
    if(req.headers['accept'] === 'application/json'){
        res.json(team);
    }else{
        render(res, 'team', { team: team });
    }
};

exports.customize = function(req, res) {
    var team = Teams.build(parseInt(req.params.id));
    render(res, 'customize', { team: team });
};

exports.page = function(req, res) {

    var id = parseInt(req.params.id);

    Page.findOne({ key: id }, 'html', function(err, result) {
        result = result || { html: '' };
        render(res, 'page', { key: id, html: result.html });
    });
};

exports.search = function(req, res) {
    
    var query = req.query.q || '';
    
    Page.find({ html: RegExp(query, 'ig') }, function(err, result) {
        render(res, 'search', { results: result, query: query }); 
    });
}

exports.stats = function(req, res) {
    render(res, 'stats'); 
}

exports.api = {};
exports.api.stats = {};
exports.api.stats.games = function(req, res){
    res.json(fetcher.data);
}
