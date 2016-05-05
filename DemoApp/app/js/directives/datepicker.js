/**
 * datepicker
 * Created by dcorns on 5/5/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.directive('datePicker', function () {
  return{
    restrict: 'A',
    link: function(scope, element, attribute, controller){
      element.datepicker();
    }
  };
});