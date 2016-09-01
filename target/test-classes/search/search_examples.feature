Feature: Demo examples

  Background:
    Given Navigate to site and switch site to English
    Given Loggged in user

  Scenario:User can navigate to the next page
    Given I set search request "iPhone 4S"
    When I perfom search
    Then user verifies that page "1" is selected
    Then user verifies that previus page arrow unavailable
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

  Scenario Outline:User can add single product to card
    Given I set search request "<request>"
    When I perfom search
    And user select item "<item>" from results list
    And user click to buy now button
    Then user verifies that checkout page is opened

    Examples:
      | request        | item    |
      | iPhone 4S      | 2       |
      | Samsung Galaxy | 3       |

  Scenario Outline: Running a Full Text Quick Search
    Given I set search request "<request>"
    When I perfom search
    Then the term query "<request>" should be the first in the Search Result grid

    Examples:
      | request        |
      | iPhone 4S      |
      | Samsung Galaxy |
