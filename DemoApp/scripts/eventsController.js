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