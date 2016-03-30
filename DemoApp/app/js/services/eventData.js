/**
 * eventData
 * Created by dcorns on 3/29/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.factory('eventData', function ($resource) {
  var resource = $resource('data/event/:id', {id: '@id'});
  return {
    getEvent: function () {
      return resource.get({id:1});
    },
    save: function(event){
      event.id = 400;
      return resource.save(event);
    }
  }
});