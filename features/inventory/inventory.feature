Feature: Inventory page validation

  Background:
    Given I am a logged in user


  Scenario: Verify inventory page elements
    Then the page URL should be "https://www.saucedemo.com/inventory.html"
    And shopping cart icon should be visible
    And burger menu icon should be visible
    And all inventory item names should match expected list:
      | Sauce Labs Backpack               |
      | Sauce Labs Bike Light             |
      | Sauce Labs Bolt T-Shirt           |
      | Sauce Labs Fleece Jacket          |
      | Sauce Labs Onesie                 |
      | Test.allTheThings() T-Shirt (Red) |


  @regression 
  Scenario: Verify user can add product to cart
    When I add a product to the cart
    Then cart badge count should be 1
    And added item should show in cart

  @regression 
  Scenario: Verify sidebar menu items
    When I open the burger menu
    Then the following sidebar items should be visible:
      | All Items       |
      | About           |
      | Logout          |
      | Reset App State |