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
    priority: -1,
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
    priority: -1,
    //using the terminal property we are able keep all directives on an element with a lower priority than the directive with terminal set to true from working. We use negetive numbers for priorities here because ng-click is a directive on the element whose priority is lower than 1 or 2 (I think it is 100), so using a positive priority number here would keep ng-click from working. Giving hindi a more negative number insures it is a lower priority because in this case we do not want it to work. So negative priority numbers have less priority as they become more negative and positive priorities have less priority as they become more positive, but a positive number always has a higher priority than a negative one.
    terminal: true,
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
    priority: -2,
    link: function(scope, element, attrs, controller){
      controller.addGreeting('goblygook');
    }
  }
});