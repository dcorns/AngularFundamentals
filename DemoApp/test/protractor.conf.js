/**
 * protractor.conf
 * Created by dcorns on 5/11/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
//Make sure to npm install protractor first. This installs webdriver-manager which you will then update by running webdriver-manager update, then you run webdriver-manager start in order to start the selenium server
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/**/*.js'],
  capabilities: {
    browserName: 'chrome'
  }
};