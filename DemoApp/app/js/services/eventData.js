/**
 * eventData
 * Created by dcorns on 3/29/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.factory('eventData', function ($resource) {
  var resource = $resource('data/event/:id', {id: '@id'});
  return {
    getEvent: function (eventId) {
      return resource.get({id:eventId});
    },
    save: function(event){
      event.id = 400;
      return resource.save(event);
    },
    getAllEvents: function(){
      return resource.query(); //returns an array
    }
  }
});