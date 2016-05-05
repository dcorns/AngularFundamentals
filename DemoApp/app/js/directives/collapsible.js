/**
 * collapsible
 * Created by dcorns on 5/4/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.directive('collapsible', function () {
  return{
    restrict: 'E',
    replace: true,
    //using transclude we can put html inside the element tags of our directive
    template: '<div><h4 class="well-title" ng-click="toggleVisibility()">{{title}}</h4><div ng-transclude ng-show="visible"></div></div>',
    controller: function ($scope){
      $scope.visible = false;
      $scope.toggleVisibility = function(){
        $scope.visible = !$scope.visible;
      };
    },
    transclude: true,
    //isolated scope
    scope: {
      title: '@'
    }
  }
});