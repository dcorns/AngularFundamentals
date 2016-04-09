'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
  //config runs when the module is being bootstrapped
  .config(function($routeProvider, $locationProvider){
    $routeProvider.when('/newEvent', {
      templateUrl: 'templates/newEvent.html',
      controller: 'EditEventController'
    });
    $routeProvider.when('/events',{
      templateUrl: 'templates/eventList.html',
      controller: 'EventListController'
    });
    $routeProvider.when('/event/:eventId',{
      templateUrl: 'templates/eventDetails.html',
      controller: 'EventController',
      //Using resolve to keep a page from partially loading while it is waiting for data
      resolve: {
        event: function($route, eventData){
          return eventData.getEvent($route.current.pathParams.eventId).$promise;
        }
      }
    });
    $routeProvider.otherwise({redirectTo: '/events'});
    $locationProvider.html5Mode(true);
  });
