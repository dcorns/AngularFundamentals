/**
 * eventController
 * Created by dcorns on 3/28/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData, $log){
    $scope.sortorder = '-vote';
    eventData.getEvent()
      .success(function(event){
      $scope.event = event;
    })
      .error(function(data, status, headers, config){
        $log.warn(data, status, headers(), config);
      });
    $scope.upVoteSession = function(session){
      session.vote++;
    };
    $scope.downVoteSession = function(session){
      session.vote--;
    };
});