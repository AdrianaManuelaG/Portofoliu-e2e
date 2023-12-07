Feature: Failed access details

  Scenario: Failed access details test
    Given I open the home page
    When I click on submit button without email input
    Then I shoul recive an message with instruction
