Feature: Login Test
  As user I want to login to VirginGame Website


  Scenario: user should see login link on home page
    Given I am on homepage
    Then I should see login Link on Homepage.


  Scenario Outline: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errorMessage>"
    Examples:
      | email             | password | errorMessage                                                         |
      | abcd123@gmail.com | xyz123   | The username or password you entered is incorrect. Please try again. |
      | xyz123@gmail.com  | abc123   | The username or password you entered is incorrect. Please try again. |



