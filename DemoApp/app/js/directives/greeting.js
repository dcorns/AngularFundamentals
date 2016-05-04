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
    controller: 'GreetingController'
  }
});
//This controller could be defined anywhere, in another file or whatever, just as long as it is part of the app, the directive can use it
eventsApp.controller('GreetingController', function GreetingController($scope){
    $scope.sayHello = function(){
      alert('Hello');
    }
});