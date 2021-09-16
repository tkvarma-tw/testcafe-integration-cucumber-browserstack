Feature: Place new order for existing Customer

   As a user, I want to place the order from Juice Shop Account

Background: Register User
Given I register the new user with email address "tushartest@test.com"

Scenario: Place Order End to End Happy path
Given I open the Login Page
# When I click on Me Want It button
# When I click on Close Welcome Banner button
When I enter the email address with existing email address in LoginPage
And I enter the password "tushki89" in LoginPage
And I click on Login button in LoginPage
And I click on Add to Basket button for product "20th Anniversary Celebration Ticket" in HomePage
And I validate the Product Number for product in Cart in HomePage
And I click on Show Cart button in HomePage
And I click on Checkout button in ShoppingCartPage
And I click on Add New Address button in AddressPage
And I enter the country "India" in AddressPage
And I enter the name "Tushar Varma" in AddressPage
And I enter the mobile number "9963045448" in AddressPage
And I enter the zip code "422001" in AddressPage
And I enter the address "Vidhate Nagar, Wadala Shivar" in AddressPage
And I enter the city "Nashik" in AddressPage
And I enter the state "Maharashtra" in AddressPage
And I click on submit button in AddressPage
And I click on newly created address button in AddressPage
And I click on address continue button in AddressPage
And I click on delivery radio button in AddressPage
And I click on delivery continue button in AddressPage
And I click on Add new card button in CardDetailsPage
And I enter the name "Tushar Varma" in CardDetailsPage
And I enter the card number "1234567812345678" in CardDetailsPage
And I enter the expiry month "2" in CardDetailsPage
And I enter the expiry year "2081" in CardDetailsPage
And I click on submit button in AddressPage
And I click on newly created card button in CardDetailsPage
And I click on card continue button in CardDetailsPage
And I click on complete purchase button in ReviewProductPage
Then I verify that the Thank you title is displayed