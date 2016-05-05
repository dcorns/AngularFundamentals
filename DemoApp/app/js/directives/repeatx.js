/**
 * repeatx
 * Created by dcorns on 5/5/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.directive('repeatX', function($compile){
  return{
    //using a link function. notice how it is recreating itself as well as the div content
    //fix input with the compile service, used to manipulate the DOM prior to link function call
    link: function(scope, element, attributes, controller){
      for(var i = 0; i < Number(attributes.repeatX)-1; i++){
        element.after($compile(element.clone().attr('repeat-x', 0))(scope));
      }
    }
  };
});