// features/step_definitions/step_definitions.js

module.exports = function () {
  this.World = require('../support/world.js').World;

  this.Given(/^I open homepage and enter my name$/, function (callback) {
    this.driver.get('###TOKEN_FULL_SITE_ADDRESS###');
    var alert = this.driver.switchTo().alert();
    alert.sendKeys("cucumber");
    alert.accept();
    callback();
  });

  this.When(/^I will see "(.*)" as the page title$/, function (pageTitle, callback) {
    var promise = this.driver.getTitle('###TOKEN_FULL_SITE_ADDRESS###');
    promise.then(function(title) {
        if (title === pageTitle) {
            callback();
        } else {
            callback(new Error("Expected to be on page with title " + pageTitle + "Instead got: " + title));
        }
    });
  });

  this.Then(/^I should be able to leave a feedback$/, function (callback) {
    this.driver.findElement(this.webdriver.By.name('question')).sendKeys('Automated entry');
    this.driver.findElement(this.webdriver.By.id('addQuestionForm-add')).click();
    callback();
  });
};