Feature: Checkout flow
  As a logged in user
  I want to complete a checkout flow
  So that I can finish an order successfully

  Scenario: Complete checkout flow after adding a product to the cart
    Given I am a logged in user
    When I add "Sauce Labs Backpack" to the cart
    And I navigate to the cart
    Then the cart should display the selected item "Sauce Labs Backpack"
    And the page URL should be "https://www.saucedemo.com/cart.html"
    When I click the checkout button
    And I enter checkout details with first name "John", last name "Doe" and ZIP "12345"
    Then the page URL should be "https://www.saucedemo.com/checkout-step-one.html"
    When I click continue
    Then the page URL should be "https://www.saucedemo.com/checkout-step-two.html"
    When I click finish
    Then I should see the order confirmation message "Thank you for your order!"
