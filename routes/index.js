var io = require('socket.io').listen(8080);

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.safari = function(req, res){
  res.render('safari', { title: 'Express' });
};

exports.ie = function(req, res){
  res.render('ie', { title: 'Express' });
};

exports.phone = function(req, res){
  res.render('phone', { title: 'Express' });
};

exports.tab = function(req, res){
  res.render('tab', { title: 'Express' });
};

exports.about = function(req, res){
  res.render('about', { title: 'Express' });
};

exports.artwork = function(req, res){
  res.render('artwork', { title: 'Express' });
};

exports.project = function(req, res){
  res.render('project', { title: 'Express' });
};

exports.service = function(req, res){
  res.render('service', { title: 'Express' });
};

exports.ni = function(req, res){
  res.render('ni', { title: 'Express' });
};


io.sockets.on('connection', function (socket) {
socket.emit('examples', 'aaa');
socket.on('on', function (data) {
    console.log(data);
});
});