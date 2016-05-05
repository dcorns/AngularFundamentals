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
    priority: 1,
    controller: function ($scope) {
      var greetings = ['hello'];
      $scope.sayHello = function () {
        alert(greetings.join());
      };
      //using 'this' to add addGreeting to the controller scope
      this.addGreeting = function (greeting) {
        greetings.push(greeting);
      }
    }
  }
})

.directive('finnish', function(){
  return{
    restrict: 'A',
    //using require to bring in the greeting directive to share its controller
    require: 'greeting',
    priority: 1,
    //link gets called for every instance of a directive, the controller in the link function is the controller that is part of the greeting directive that we required
    link: function(scope, element, attrs, controller){
      controller.addGreeting('hei');
    }
  }
})

.directive('hindi', function (){
  return{
    restrict: 'A',
    require: 'greeting',
    priority: 2,
    link: function(scope, element, attrs, controller){
      controller.addGreeting('goblygook');
    }
  }
});