'use strict';
eventsApp.directive('mySample', function($compile){
  return{
    template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>"
  };
});