/**
 * eventController
 * Created by dcorns on 3/28/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

eventsApp.controller('EventController',
  function EventController($scope){
    $scope.sortorder = '-vote';
    $scope.event = {
      name: 'Event1',
      date: '3/12/2016',
      time: '12:00pm',
      location:{
        address: '3243 1st Ave South',
        city: 'Seattle',
        province: 'WA'
      },
      imageUrl: 'img/angularjs-logo.png',
      sessions:[
        {
          name: 'session one',
          creatorName: 'Bob North',
          duration: 2,
          level: 'beginner',
          abstract: 'The Internet of session one',
          vote: 0
        },
        {
          name: 'session two',
          creatorName: 'Bob North',
          duration: 1,
          level: 'intermediate',
          abstract: 'The Internet of session two',
          vote: 0
        },
        {
          name: 'session three',
          creatorName: 'Bob North',
          duration: 3,
          level: 'advanced',
          abstract: 'The Internet of session three',
          vote: 0
        }
      ]
    };
    $scope.upVoteSession = function(session){
      session.vote++;
    };
    $scope.downVoteSession = function(session){
      session.vote--;
    };
});