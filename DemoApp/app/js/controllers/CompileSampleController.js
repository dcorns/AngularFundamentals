/**
 * CompileSampleController
 * Created by dcorns on 3/30/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.controller('CompileSampleController',
  function CompileSampleController($scope, $compile, $parse) {

    var fn = $parse('1 + 2');
    console.log(fn());

    var getter = $parse('event.name');
    var context1 = {event: {name: 'Angular js Boot Camp'}};
    var context2 = {event: {name: 'Code Camp'}};

    console.log(getter(context1));
    console.log(getter(context2));
    console.log(getter(context2, context1)); //getter(context, local context) local context takes precedence of context

    //assign values to the context
    var setter = getter.assign;
    setter(context2, 'Code Retreat');
    console.log(context2.event.name);

    $scope.appendToDivElement = function appendToDivElement(markup) {
      //$compile is a linking function. $compile(markup) creates a function and then runs with ($scope).app... as the input
      return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
    }
  });
