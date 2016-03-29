/**
 * editProfileController
 * Created by dcorns on 3/29/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.controller('EditProfileController',
  function EditProfileController($scope, gravatarUrlBuilder) {
    $scope.user = {};
    $scope.getGravatarUrl = function(email){
      return gravatarUrlBuilder.buildGravatarUrl(email);
    };

  });