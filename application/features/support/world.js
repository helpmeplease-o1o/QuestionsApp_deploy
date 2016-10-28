// features/support/world.js
'use strict';

var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .usingServer('http://selenium-hub:4444/wd/hub')
    .build();

var getDriver = function() {
  return driver;
};

var World = function World(callback) {

  var defaultTimeout = 20000;

  this.webdriver = webdriver;
  this.driver = driver;

  this.waitFor = function(cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function() {
      return driver.isElementPresent({ css: cssLocator });
    }, waitTimeout);
  };

  callback;
};

module.exports.World = World;
module.exports.getDriver = getDriver;
