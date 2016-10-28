# features/aowp_feature.feature

Feature: AOWP feature 
  As a user I want to test if I can open the webpage
  click on some url and go to some page

  Scenario: Open webpage
  	Given I open homepage and enter my name
  	When I will see "Global Leadership Council Feedback" as the page title
  	Then I should be able to leave a feedback