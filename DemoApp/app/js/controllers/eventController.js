/**
 * eventController
 * Created by dcorns on 3/28/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {
    $scope.sortorder = 'name';
    eventData.getEvent($routeParams.eventId)
      .$promise.then(
      function (event) {
        $scope.event = event;
      }).catch(function (reject) {
      console.log(reject);
    });

    console.log($route.current.foo); //reading custom property from the /event/:eventId route
    console.log($route.current.params.foo2); //reading a query string sent in with the route request (localhost:8000/#/event/2?foo2=Hi)
    console.log($route.current.params.eventId); //You can access all parameters passed to the route with current.params, but to access only the parameters on the route use current.pathParams
    console.log($route.current.pathParams.eventId);//
    
    $scope.reload = function () {//refresh the associated template without refreshing the whole application
      console.log('reload');
      $route.reload();
    };
    
    $scope.upVoteSession = function (session) {
      session.vote++;
    };
    $scope.downVoteSession = function (session) {
      session.vote--;
    };
    $scope.scrollToSession = function scrollToSession() {
      $anchorScroll();
    }
  });