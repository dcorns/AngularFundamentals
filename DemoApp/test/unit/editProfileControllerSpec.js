/**
 * editProfileControllerSpec
 * Created by dcorns on 5/5/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
describe('EditProfileController', function(){
  var $controllerConstructor, scope, mockGravatarUrlBuilder;
  
  beforeEach(module('eventsApp'));
  
  beforeEach(inject(function($controller, $rootScope){
    $controllerConstructor = $controller;
    scope = $rootScope.$new();
    mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl: function(){}});
  }));
  
  it('should call build gravatar with given email address', function(){
    
    $controllerConstructor('EditProfileController', {
      $scope: scope,
      gravatarUrlBuilder: mockGravatarUrlBuilder
    });
    var email = 'codefellow@gmail.com';
    scope.getGravatarUrl(email);
    expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
  })
});