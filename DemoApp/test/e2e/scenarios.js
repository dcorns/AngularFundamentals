/**
 * scenarios
 * Created by dcorns on 5/11/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
describe('event registration app', function(){
  describe('events page', function(){
    beforeEach(function(){
      browser.get('http://localhost:8000/events/');
    });
    it('should have the correct title and first event', function(){
      var list = element.all(by.repeater('event in events'));
      expect(list.count()).toEqual(4);
      //finds more than one binding to event.name but will use the first one by default
      var titleElement = element(by.binding('event.name'));
      expect(titleElement.getText()).toEqual('Angular Boot Camp');
    });
  });

  describe('event details page', function(){
    beforeEach(function(){
      browser.get('http://localhost:8000/event/1');
    });
    it('should sort by name', function(){
      var list = element.all(by.repeater('session in event.sessions'));
      //finds more than one binding to title, but instead of expecting the first by default, we are explicit using .first()
      var titleElement = list.first().element(by.binding('title'));
      expect(titleElement.getText()).toEqual('Directives Masterclass');
    });

    it('should have 3 sessions', function(){
      var list = element.all(by.repeater('session in event.sessions'));
      expect(list.count()).toEqual(3);
    });

    it('should have one session show when intermediate is chosen', function(){
      var selectEl = element(by.model('query.level'));
      selectEl.element(by.cssContainingText('option', 'Intermediate')).click();
      var list = element.all(by.repeater('session in event.sessions'));
      expect(list.count()).toEqual(1);
    });

    it('should sort correctly when sort order is changed', function(){
      var selectEl = element(by.model('sortorder'));
      selectEl.element(by.cssContainingText('option', 'Votes')).click();
      var firstSession = element.all(by.repeater('session in event.sessions')).first();
      var firstSessionName = firstSession.element(by.binding('title')).getText();
      expect(firstSessionName).toEqual('Scopes for fun and profit');
    });

  });
});