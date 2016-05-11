/**
 * eventDataSpec
 * Created by dcorns on 5/10/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
describe('eventData', function(){
  beforeEach(module('eventsApp'));
  it('should make a get request to data/event/11 when getEvent is called and the ID is 11', inject(function(eventData, $httpBackend){
    $httpBackend.expectGET('data/event/11');
    $httpBackend.when('GET', 'data/event/11').respond({});
    eventData.getEvent(11);
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  })
  );

  it('should return the correct data when getEvent is called', inject(function(eventData, $httpBackend){
    $httpBackend.when('GET', 'data/event/11').respond({name: 'My Event'});
    var event = eventData.getEvent(11);
    $httpBackend.flush();
    expect(event.name).toBe('My Event');
  }));

  it('should set the id to 400 when save is called', inject(function(eventData, $httpBackend){
    $httpBackend.when('POST', 'data/event/400').respond({});
    var event = {name: 'My Event'};
    eventData.save(event);
    $httpBackend.flush();
    expect(event.id).toBe(400);
  }));

  it('should make a GET request to data/event when getAllEvents is called', inject(function(eventData, $httpBackend){
    $httpBackend.when('GET', 'data/event').respond([{name: 'My Event'}]);
    var events = eventData.getAllEvents();
    $httpBackend.flush();

    expect(events[0].name).toBe('My Event');
  }))

});