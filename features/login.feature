Feature: Login page validation


 Scenario: Verify all static elements on the login page
    Given I am on the login page
    Then the page URL should be "https://www.saucedemo.com/"
    And the page title should be "Swag Labs"
    And the username input should have placeholder "Username"
    And the password input should have placeholder "Password"

  Scenario: User can login with valid credentials
    Given I am on the login page
    When I login with valid credentials
    Then I should see the products page

  Scenario: User cannot login with invalid credentials
    Given I am on the login page
    When I login with invalid credentials
    Then login should not be successful
