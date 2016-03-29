'use strict';

eventsApp.filter('durations', function(){
  return function(duration){
    switch (duration){
      case 1:
        return "Half Hour";
      break;
      case 2:
        return "One Hour";
        break;
      case 3:
        return "Half Day";
        break;
      case 4:
        return "Half Day";
        break;
    }
  }
});