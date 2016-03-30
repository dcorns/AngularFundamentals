/**
 * editEventController
 * Created by dcorns on 3/28/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.controller('EditEventController', function($scope, eventData){
  $scope.saveEvent = function(event, newEventForm){
    if(newEventForm.$valid){
      eventData.save(event)
        .$promise.then(function(response){
        console.log('success:', response);
      })
        .catch(function(error){
          console.log('failure:', error);
        });
    }
  };
  $scope.cancelEvent = function(){
    window.location = 'eventDetails.html';
  };
});