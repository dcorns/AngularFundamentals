/**
 * LocaleSampleController
 * Created by dcorns on 3/31/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
eventsApp.controller('LocaleSampleController',
  function LocaleSampleController($scope, $locale) {
    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
    //get localazation files from https://code.angularjs.org/1.4.0/i18n
    //save for whatever locale you want and reference in project we are using european spanish in LocaleSample.html
    console.log($locale);

  });