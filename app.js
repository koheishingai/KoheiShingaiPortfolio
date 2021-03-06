var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 1337);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/safari', routes.safari);
app.get('/ie', routes.ie);
app.get('/phone', routes.phone);
app.get('/tablet', routes.tab);
app.get('/about', routes.about);

app.get('/artwork', routes.artwork);

app.get('/project', routes.project);
app.get('/service', routes.service);
app.get('/users', user.list);
app.get('/store', routes.store);
app.get('/ni', routes.ni);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});