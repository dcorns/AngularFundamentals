/**
 * TimeoutSampleController
 * Created by dcorns on 3/31/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.controller('TimeoutSampleController',
  function TimeoutSampleController($scope, $timeout) {

    //because setTimeout will not work as expected in angular. Angular is aware of model changes made by $timeout
    var promise = $timeout(function () {
      $scope.name = "Lisa Corns"
    }, 3000);

    $scope.cancel = function cancel() {
      $timeout.cancel(promise)
    }

  });