/**
 * eventListController
 * Created by dcorns on 4/7/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

eventsApp.controller('EventListController',
  function EventListController($scope, eventData) {
    $scope.events = eventData.getAllEvents();
  });