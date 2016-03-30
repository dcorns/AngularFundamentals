/**
 * eventController
 * Created by dcorns on 3/28/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData){
    $scope.sortorder = '-vote';
    eventData.getEvent()
      .$promise.then(
      function(event){
        $scope.event = event; console.log(event);
      }).
      catch(function(reject){
      console.log(reject);
    });
      

    $scope.upVoteSession = function(session){
      session.vote++;
    };
    $scope.downVoteSession = function(session){
      session.vote--;
    };
});