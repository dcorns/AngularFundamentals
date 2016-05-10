/**
 * userController
 * Created by dcorns on 5/10/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var fs = require('fs');

module.exports.save = function save(req, res){
  var user = req.body;
  fs.writeFileSync('api/data/user/' + req.params.id + '.json', JSON.stringify(user));
  res.send(user);
};