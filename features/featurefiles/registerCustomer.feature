Feature: Register the new Customer

   As a new user, I need to register to the Juice Shop Account

@positive
Scenario Outline: New User Registrations End to End Happy path
Given I open the Login Page
When I click on Me Want It button
When I click on Close Welcome Banner button
When I click on Add Customer button
And I enter the email address "<email>"
And I enter the password "<password>"
And I reenter the password "<password>"
And I enter the Security question "<securityQuestion>"
And I enter the security answer "<securityAns>"
And I click on Register button
Then I verify that the Login title is displayed
Examples:
    | email | password| securityQuestion |securityAns|
    | test1111@test111154324231167.com  | tushki89 | Paternal grandmother's first name?  |test|
   #  | 123@645345435.com  | tushk89 | 4  |test|
   #  | test111@test1511167.com  | tushki89 | 5  |test|


@negative
Scenario: Existing User Registration throws error as UserName should be unique

Given I register the new user with email address "tushaq11231141445@test.com"
When I open the Login Page
When I click on Add Customer button
And I enter the email address with existing email address
And I enter the password "tushki89"
And I reenter the password "tushki89"
And I enter the Security question "Paternal grandmother's first name?"
And I enter the security answer "test"
And I click on Register button
Then I verify that the Email Error is displayed


