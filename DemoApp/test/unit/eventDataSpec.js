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
    eventData.getEvent('11');
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  })
  )
});