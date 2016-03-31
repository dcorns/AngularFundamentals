/**
 * CookieStoreSampleController
 * Created by dcorns on 3/31/16
 * Copyright © 2016 Dale Corns
 * Built in cookieStore does not facilitate an expiration
 */
'use strict';
eventsApp.controller('CookieStoreSampleController',
  function CookieStoreSampleController($scope, $cookieStore) {
    $scope.event = {id: 1, name: "My Event"};
    $scope.saveEventToCookie = function saveEventToCookie(event) {
      $cookieStore.put('event', event);
    };
    $scope.getEventFromCookie = function getEventFromCookie() {
      console.log($cookieStore.get('event'));
    };
    $scope.removeEventCookie = function removeEventCookie() {
      $cookieStore.remove('event');
    };
  });