/**
 * greeting
 * Created by dcorns on 5/4/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.directive('greeting', function(){
  return {
    restrict: 'E',
    replace: true,
    template: '<button class="btn" ng-click="sayHello()">Say Hello</button>',
    controller: function($scope){
      $scope.sayHello = function(){
        alert('Hello');
      }
    }
  }
});