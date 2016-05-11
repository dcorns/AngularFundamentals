/**
 * EventThumbnailSpec
 * Created by dcorns on 5/10/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

describe('EventThumbnail', function(){
  var el;
  beforeEach(module('eventsApp'));
  beforeEach(module('templates/directives/eventThumbnail.html'));
  beforeEach(inject(function($compile, $rootScope){
    var scope = $rootScope.$new();
    scope.event = {name: 'Kirby', data: '2/15/1963', time: '11:30', location: {address: '2341 777 Street NW', city: 'Pearly Gates', province: 'Kingdom of God'}, id: 1};
    el = angular.element('<event-thumbnail event="event"/>');//create the directive
    $compile(el)(scope); //convert the directive into it's definition and invoke it with the scope
    scope.$digest(); //update the data bindings
    console.log(el[0].outerHTML); //logging the directive (jquery object) html
  }));
  it('should bind the data', function(){
    expect(el.text()).toContain('Kirby');
  })
});