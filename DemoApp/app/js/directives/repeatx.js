/**
 * repeatx
 * Created by dcorns on 5/5/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.directive('repeatX', function(){
  return{
    //using a link function. notice how it is recreating itself as well as the div content
    //optimize the DOM manipulation by replacing link with the compile function, compile is for DOM manipulation only and is used in a directive rarely; typically when multiple DOM manipulations are required as the running the $compile service in the link function is much more expensive. Used here because we are repeating. This way the compiler runs once everything as opposed to once each.
    compile: function(element, attributes){
      for(var i = 0; i < Number(attributes.repeatX)-1; i++){
        element.after(element.clone().attr('repeat-x', 0));
      }
      //returning a link function from the compile function. This fires for each of the cloned functions
      return function (scope, element, attribute, controller){
        attribute.$observe('text', function(newValue){
          if(newValue === 'Hello World'){
            element.css('color', 'green');
          }
        });
      }
    }
  };
});