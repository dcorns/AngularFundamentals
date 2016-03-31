/**
 * CacheSampleController
 * Created by dcorns on 3/30/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.controller('CacheSampleController',
  function CacheSampleController($scope, myCache) {
    $scope.addToCache = function addToCache(key, value) {
      myCache.put(key, value);
    };
    $scope.readFromCache = function readFromCache(key) {
      return myCache.get(key);
    };
    $scope.getCacheStatus = function getCacheStatus() {
      return myCache.info();
    }
  });