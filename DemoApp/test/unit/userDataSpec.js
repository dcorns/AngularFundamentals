/**
 * userDataSpec
 * Created by dcorns on 5/6/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
describe('userData', function(){
  var mockUserResource;

  beforeEach(module('eventsApp'));

  beforeEach(function(){
    mockUserResource = sinon.stub({get: function(){}, save: function(){}});
    module(function($provide){
      $provide.value('userResource', mockUserResource);
    });
  });
  describe('getUser', function(){
    it('should call userResource.get with the userName', inject (function(userData){
      userData.getUser('Bob');
      expect(mockUserResource.get.args[0][0]).toEqual({userName: 'Bob'});
    }));

    it('should return whatever userResource.get returns', inject(function(userData){
      mockUserResource.get.returns('Dale is the coolest');
      var result = userData.getUser('Bob');
      expect(result).toBe('Dale is the coolest');
    }));
  });

  describe('save', function(){
    it('should call userResource.save with the same parameter', inject(function(userData){
      userData.save('someValue');

      expect(mockUserResource.save.calledWith('someValue')).toBe(true);
    }))
  })

});