const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const registerPage = require('../support/pages/RegisterCustomerPage')
const loginPage = require('../support/pages/LoginPage')
const homePage = require('../support/pages/HomePage')
const addressPage = require('../support/pages/AddressPage')
const cardDetailsPage = require('../support/pages/CardDetailsPage')
const reviewProductPage = require('../support/pages/ReviewProductPage')
var emailAddress = require("../step_definitions/RegisterCustomer_steps")
const {Selector} = require('testcafe')


var randomNum = Math.random()*10;

When('I enter the email address {string} in LoginPage', async function (emailAddress) {
    await testController.typeText(loginPage.LoginPage.EmailInputField(), emailAddress);
         });

When('I enter the email address with existing email address in LoginPage', async function () {
     if(!this.emailAddress == ""){
          emailAddress = this.emailAddress;
        }
     await testController.typeText(loginPage.LoginPage.EmailInputField(), emailAddress);
          });

   When('I enter the password {string} in LoginPage', async function (password) {
    await testController.typeText(loginPage.LoginPage.PasswordInputField(), password);
         });

   When('I click on Login button in LoginPage', async function () {
    await testController.click(loginPage.LoginPage.LoginButton());
         });

   When('I click on Add to Basket button for product {string} in HomePage',async function (product) {
    await testController.click(homePage.HomePage.GetAddToCartProduct(product));
         });

   When('I validate the Product Number for product in Cart in HomePage', async function () {
           await testController.expect(homePage.HomePage.GetProductCount().visible).ok();
         });

   When('I click on Show Cart button in HomePage',async function () {
    await testController.click(homePage.HomePage.ShowCartButton());
         });

   When('I click on Checkout button in ShoppingCartPage',async function () {
    await testController.click(homePage.HomePage.CheckOutButton());
         });

   When('I click on Add New Address button in AddressPage', async function () {
    await testController.click(addressPage.AddressPage.AddNewAddressButton());
         });

   When('I enter the country {string} in AddressPage', async function (text) {
    await testController.click(addressPage.AddressPage.CountryInput())
    await testController.typeText(addressPage.AddressPage.CountryInput(), text);
         });

  When('I enter the name {string} in AddressPage',async function (text) {
    await testController.click(addressPage.AddressPage.NameInput())
    await testController.typeText(addressPage.AddressPage.NameInput(), text);
  });

   When('I enter the mobile number {string} in AddressPage', async function (text) {
    await testController.click(addressPage.AddressPage.MobileNumberInput())
    await testController.typeText(addressPage.AddressPage.MobileNumberInput(), text);
         });

   When('I enter the zip code {string} in AddressPage', async function (text) {
    await testController.click(addressPage.AddressPage.ZipCodeInput())
    await testController.typeText(addressPage.AddressPage.ZipCodeInput(), text);
         });

   When('I enter the address {string} in AddressPage', async function (text) {
    await testController.click(addressPage.AddressPage.AddressInput())
    await testController.typeText(addressPage.AddressPage.AddressInput(), text);
         });

   When('I enter the city {string} in AddressPage',async function (text) {
    await testController.click(addressPage.AddressPage.CityInput())
    await testController.typeText(addressPage.AddressPage.CityInput(), text);
         });

   When('I enter the state {string} in AddressPage', async function (text) {
    await testController.click(addressPage.AddressPage.StateInput())
    await testController.typeText(addressPage.AddressPage.StateInput(), text);
         });

   When('I click on submit button in AddressPage', async function () {
    await testController.click(addressPage.AddressPage.SubmitButton())
         });

   When('I click on newly created address button in AddressPage',async function () {
    await testController.click(addressPage.AddressPage.AddressRadioButton())
         });

   When('I click on address continue button in AddressPage', async function () {
    await testController.click(addressPage.AddressPage.AddressContinueButton())
         });

   When('I click on delivery radio button in AddressPage', async function () {
    await testController.click(addressPage.AddressPage.DeliveryRadioButton())
         });

   When('I click on delivery continue button in AddressPage', async function () {
    await testController.click(addressPage.AddressPage.DeliverContinueButton())
         });

   When('I click on Add new card button in CardDetailsPage',async  function () {
    await testController.click(cardDetailsPage.CardDetailsPage.AddNewCardButton())
         });

   When('I enter the name {string} in CardDetailsPage', async function (text) {
    await testController.click(cardDetailsPage.CardDetailsPage.NameInput())
    await testController.typeText(cardDetailsPage.CardDetailsPage.NameInput(), text);
         });

   When('I enter the card number {string} in CardDetailsPage', async function (text) {
    await testController.click(cardDetailsPage.CardDetailsPage.CardNumberInput())
    await testController.typeText(cardDetailsPage.CardDetailsPage.CardNumberInput(), text);
         });

   When('I enter the expiry month {string} in CardDetailsPage', async function (option) {
    await testController.click(cardDetailsPage.CardDetailsPage.ExpiryMonthInput())
    await testController.click(cardDetailsPage.CardDetailsPage.ExpiryMonthInput().find('option').withText(option))
         });

   When('I enter the expiry year {string} in CardDetailsPage',async  function (option) {
    await testController.click(cardDetailsPage.CardDetailsPage.ExpiryYearInput())
    await testController.click(cardDetailsPage.CardDetailsPage.ExpiryYearInput().find('option').withText(option))
         });

   When('I click on newly created card button in CardDetailsPage',async function () {
    await testController.click(cardDetailsPage.CardDetailsPage.CardRadioButton())
         });

   When('I click on card continue button in CardDetailsPage',async function () {
    await testController.click(cardDetailsPage.CardDetailsPage.CardContinueButton())
         });

   When('I click on complete purchase button in ReviewProductPage',async function () {
    await testController.click(reviewProductPage.ReviewProductPage.CompletePurchaseButton())
         });

   Then('I verify that the Thank you title is displayed',async function () {
    await testController.expect(reviewProductPage.ReviewProductPage.PlaceOrderHeader().visible).ok();
         });