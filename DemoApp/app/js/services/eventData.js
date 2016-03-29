/**
 * eventData
 * Created by dcorns on 3/29/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.factory('eventData', function ($http, $log) {
  return {
    getEvent: function (successCb) {
      return $http({method: 'GET', url: 'data/event/1'});
    }
  }
});