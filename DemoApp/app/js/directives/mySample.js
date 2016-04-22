'use strict';
eventsApp.directive('mySample', function($compile){
  return{
    //default use of directive is by attribute use restrict to control how directive can be called. Below we make it an element
    restrict: 'AECM',//Attribute, Element, Class, Comment
    template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>",
    scope:{
      //Decoupling instances of the directive with isolated scope so all inputs and binding no longer equal the same data
    }
  };
});