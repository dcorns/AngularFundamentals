/**
 * gravitar
 * Created by dcorns on 5/4/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.directive('gravitar', function(gravatarUrlBuilder){
  return{
    restrict: 'E',
    template: '<img/>',
    replace: true,
    link: function(scope, element, attrs, controllers){
      attrs.$observe('email', function(newValue, oldValue){
        if(newValue !== oldValue){
          attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
        }
      });
    }
  }
});