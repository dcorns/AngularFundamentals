/**
 * durationsSpec.js
 * Created by dcorns on 5/10/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

describe('durations', function(){
  beforeEach(module('eventsApp'));
  it('should return Half Hour when passed a 1', inject(function(durationsFilter){
    expect(durationsFilter(1)).toEqual('Half Hour');
  }));

  it('should return One Hour when passed a 2', inject(function(durationsFilter){
    expect(durationsFilter(2)).toEqual('One Hour');
  }));

  it('should return Half Day when passed a 3', inject(function(durationsFilter){
    expect(durationsFilter(3)).toEqual('Half Day');
  }));

  it('should return All Day when passed a 4', inject(function(durationsFilter){
    expect(durationsFilter(4)).toEqual('All Day');
  }));
});