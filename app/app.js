
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

var app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/dreadnauts');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.compress());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/teams', routes.teams);
app.get('/teams/:id', routes.teams);
app.get('/teams/customize/:id', routes.customize);
app.get('/constants', routes.constants);
app.get('/actions/:id', routes.page);
app.get('/abilities/:id', routes.page);
app.get('/search', routes.search);
app.get('/stats', routes.stats);
app.get('/heartbeat', routes.heartbeat);

app.get('/api/stats/games', routes.api.stats.games);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
