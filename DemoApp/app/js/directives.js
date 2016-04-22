'use strict';
eventsApp.directive('mySample', function($compile){
  return{
    //In the tutorial but did not work for me
    link: function(scope, element, attrs, controller){
      var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
      angular.element(element).html($compile(markup)(scope));
    }
  };
});