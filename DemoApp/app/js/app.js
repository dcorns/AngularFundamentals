'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
  //config runs when the module is being bootstrapped
  .config(function($routeProvider){
    $routeProvider.when('/newEvent', {
      templateUrl: 'templates/newEvent.html',
      controller: 'EditEventController'
    })
  });
