/**
 * eventsController
 * Created by dcorns on 3/29/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var fs=require('fs');

module.exports.get = function get(req, res){
  var event = fs.readFileSync('api/data/event/' + req.params.id + '.json', 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.send(event);
};

module.exports.save = function save(req, res){
  var event = req.body;
  var path = 'api/data/event/' + req.params.id + '.json';
  fs.writeFileSync('api/data/event/' + req.params.id + '.json', JSON.stringify(event));
  res.send(event);
};

module.exports.getAll = function(req, res){
  var path = 'api/data/event', files = [];
  try{
    files = fs.readdirSync(path);
  }
  catch (e){
    res.send('[]');
    res.end();
  }
  var results = '[', idx = 0;
  for(idx; idx < files.length; idx++){
    if (files[idx].indexOf('.json') === files[idx].length - 5){
      results += fs.readFileSync(path + '/' + files[idx]) + ',';
    }
  }
  results = results.substr(0, results.length - 1);
  results += ']';
  res.setHeader('Content-Type', 'application/json');
  res.send(results);
  res.end();
};