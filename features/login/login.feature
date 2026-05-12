Feature: Login page validation

@regression
 Scenario: Verify all static elements on the login page
    Given I am on the login page
    Then the page URL should be "https://www.saucedemo.com/"
    And the page title should be "Swag Labs"
    And the username input should have placeholder "Username"
    And the password input should have placeholder "Password"

@regression
  Scenario: Login with valid credentials
    Given I am on the login page
    When I login with valid credentials
    Then I should see the products page

@regression
  Scenario: Login with invalid credentials
    Given I am on the login page
    When I login with invalid credentials
    Then login should not be successful
 
  Scenario: Login with empty username
    Given I am on the login page
    When I login with empty username
    Then I should see an error message for empty username

  Scenario: Login with empty password
    Given I am on the login page
    When I login with empty password
    Then I should see an error message for empty password

  @regression
  Scenario: Logout successfully
    Given I am a logged in user
    And I logout from the application
    Then I should be redirected to login page