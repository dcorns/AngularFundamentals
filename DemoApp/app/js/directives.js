'use strict';
eventsApp.directive('mySample', function($compile){
  return{
    //default use of directive is by attribute use restrict to control how directive can be called. Below we make it an element
    restrict: 'E',
    template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>"
  };
});