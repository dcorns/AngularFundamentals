/**
 * eventThumbnail
 * Created by dcorns on 4/22/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

eventsApp.directive('eventThumbnail', function () {
  return{
    restrict: 'E',
    replace: true, //replace the directive tag with the html rather than putting the html inside the tag
    templateUrl: 'templates/directives/eventThumbnail.html',
    scope:{
      event: '='
    }
  }
});