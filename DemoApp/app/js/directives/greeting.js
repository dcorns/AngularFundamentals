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
    transclude: true,
    //Transclusion can not be done with buttons, so we put the button in a div along with a div for transclusion
    template: '<div><button class="btn" ng-click="sayHello()">Say Hello</button><div ng-transclude></div></div>',
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
    //require alone looks on the same element for the directive that has the controller. In order to use the controller when it is part of a parent element in relation to the directive trying to use it as is the case when it is nested, we need to use '^' to instruct require to search up the dom for it. However this still will not work unless we are using transclusion in the parent directive.
    require: '^greeting',
    //link gets called for every instance of a directive, the controller in the link function is the controller that is part of the greeting directive that we required
    link: function(scope, element, attrs, controller){
      controller.addGreeting('hei');
    }
  }
})

.directive('hindi', function (){
  return{
    restrict: 'A',
    require: '^greeting',
    link: function(scope, element, attrs, controller){
      controller.addGreeting('goblygook');
    }
  }
});