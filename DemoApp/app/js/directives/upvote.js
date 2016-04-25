/**
 * upvote
 * Created by dcorns on 4/22/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.directive('upvote', function(){
  return{
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/directives/upvote.html',
    scope:{
      upvote: '&', //& allows the execution of a function passed to the directive to be executed in the containing scope as opposed to the directives isolated scope.
      downvote: '&',
      count: '=' //if we used & here instead of = to get our property value, we would need to enclose the attribute value in "{{}}"
    }
  };
});