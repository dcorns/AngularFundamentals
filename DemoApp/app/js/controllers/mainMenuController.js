/**
 * mainMenuController
 * Created by dcorns on 4/9/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.controller('MainMenuController',
  function MainMenuController($scope, $location) {
    console.log('absUrl:', $location.absUrl());
    console.log('protocol:', $location.protocol());
    console.log('port:', $location.port());
    console.log('host:', $location.host());
    console.log('path:', $location.path());
    console.log('search:', $location.search());
    console.log('hash:', $location.hash());
    console.log('url:', $location.url());
    $scope.createEvent = function () {
      $location.replace();//changes view without changing history
      $location.url('newEvent');
    }
  });