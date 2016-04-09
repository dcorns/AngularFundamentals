'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
  //config runs when the module is being bootstrapped
  .config(function($routeProvider){
    $routeProvider.when('/newEvent', {
      templateUrl: 'templates/newEvent.html',
      controller: 'EditEventController'
    });
    $routeProvider.when('/events',{
      templateUrl: 'templates/eventList.html',
      controller: 'EventListController'
    });
    $routeProvider.when('/event/:eventId',{
      foo: 'bar', //custom route property
      templateUrl: 'templates/eventDetails.html',
      controller: 'EventController'
    });
    $routeProvider.otherwise({redirectTo: '/events'});
  });
