Feature: Login section feature

Scenario: Login fields hold data
    Given I open the page
    When I open Login modal
    Then I see the Login modal
    When I switch to Login tab
    Then Login tab is visible
    When I fill data in the form
    Then data appears in the form