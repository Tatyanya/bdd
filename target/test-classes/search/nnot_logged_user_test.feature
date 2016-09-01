Feature: Not logged in user tests

  Background:
    Given Navigate to site and switch site to English
    Given logout if user is logged in

  Scenario:User can navigate to the next page
    Given I set search request "iPhone 4S"
    When I perfom search
    Then user verifies that page "1" is selected
    And user verifies that previus page arrow unavailable
    When user select the link to the next page
    Then user verifies that page "2" is selected

  Scenario:User can add single product to card
    Given I set search request "iPhone 4S"
    When I perfom search
    And user select item "1" from results list
    And user click to buy now button
    Then user verifies that checkout page is opened
   # Then  user go to crd and verify count of items
    #Then user verifies that results displayed

