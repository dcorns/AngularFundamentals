/**
 * ExceptionHandler
 * Created by dcorns on 3/31/16
 * Copyright © 2016 Dale Corns
 * Overriding Angular exceptionHandler Service
 */
'use strict';
eventsApp.
factory('$exceptionHandler', function () {
  return function(exception){
    console.log("exception handled: " + exception.message);
  }
});