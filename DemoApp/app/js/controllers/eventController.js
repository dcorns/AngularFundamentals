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