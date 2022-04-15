@sanity
Feature: MyFirstFeature
  this feature checks the availability of the coolblue homepage.

  Background:
    Given I navigate to the homepage of coolblue
    And I accept the usage of cookies

  Scenario: Generic - Correct login
    When  I login with valid credentials
    Then  I see the my account page

  Scenario: Parametrized - Correct login
    When  I login with:
      | username | test@hotmail.com |
      | password | test             |
    Then  I see the my account page

  Scenario: Failed login
    When  I login with:
      | username | test@hotmail.com |
      | password | test@321!!!      |
    Then  Authentication failed error is displayed
