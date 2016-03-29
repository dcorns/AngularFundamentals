/**
 * editEventController
 * Created by dcorns on 3/28/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.controller('EditEventController', function($scope){
  $scope.saveEvent = function(event, newEventForm){
    if(newEventForm.$valid){
      window.alert('Event: ' + event.name + '!');
    }
  };
  $scope.cancelEvent = function(){
    window.location = 'eventDetails.html';
  };
});