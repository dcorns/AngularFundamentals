/**
 * userData
 * Created by dcorns on 5/10/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

eventsApp.factory('userData', ['userResource', function(userResource){
  return{
    getUser: function(userName, callBack){
      return userResource.get({userName: userName}, function(user){
        if (callBack){
          callBack(user);
        }
      });
    },
    save: function(user){
      userResource.save(user);
    },
    users: function(){
      return userResource.queryAll(function(users){
        return users;
      });
    }
  };
}]);