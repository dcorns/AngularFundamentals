var express = require('express');
var path = require('path');
var events = require('./eventsController');
var bodyParser = require('body-parser');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + 'app'));

app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);
app.post('/data/event/:id', events.save);

app.post('/data/user/:userName', user.save);
//default response from server for html5 routing
app.get('*', function (req, res) {
  res.sendFile(rootPath + '/app/index.html' );
});

app.listen(8000, function(){
  console.log('listening on port 8000');
});