Feature: Register the new Customer using Datatable

   As a new user, I need to register to the Juice Shop Account


Scenario: New User Registrations End to End Happy path with Datatable
Given I open the Login Page
When I click on Me Want It button
When I click on Close Welcome Banner button
And I register the new user with following data
| email | password| securityQuestion |securityAns|
| test1111@test111151167.com  | tushki89 | Paternal grandmother's first name?  |test|
| 123@645345435.com  | tushk89 |  Mother's maiden name?  |test|
| test111@test1511167.com  | tushki89 |  Your favorite movie?   |test|