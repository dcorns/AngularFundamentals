/**
 * eventListControllerSpec
 * Created by dcorns on 5/5/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
describe('EventListController', function(){
  var $controllerConstructor, scope, mockEventData; //make our controllerConstructor and scope global to describe
  //loading access to the eventsApp eventsController
  beforeEach(module('eventsApp'));
  //Use inject to grab angular services such as the controller constructor $rootScope for creating blank scopes
  beforeEach(inject(function($controller, $rootScope){
    $controllerConstructor = $controller;
    scope = $rootScope.$new();
    mockEventData = sinon.stub({getAllEvents: function(){}});
  }));
  //all tests go in an it function
  it('should set scope events to the result of eventData.getAllEvents', function(){
    var mockEvents = {};
    mockEventData.getAllEvents.returns(mockEvents);
    //create our controller only to initialize the scope, so we don't need to store it in a variable, also note that we pass in everything that is passed into the real controller into the constructor. All the things we pass in need to be defined as well
    $controllerConstructor('EventListController', {
      $scope: scope,
      eventData: mockEventData
    });
    //after initializing the controller, scope.events should be equal to mockEvents
    expect(scope.events).toBe(mockEvents);
  })
});