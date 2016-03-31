/**
 * CompileSampleController
 * Created by dcorns on 3/30/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.controller('CompileSampleController',
  function CompileSampleController($scope, $compile) {
    $scope.appendToDivElement = function appendToDivElement(markup) {
      //$compile is a linking function. $compile(markup) creates a function and then runs with ($scope).app... as the input
      return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
    }
  });
