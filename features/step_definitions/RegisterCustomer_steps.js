const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const registerPage = require('../support/pages/RegisterCustomerPage')
const {Selector} = require('testcafe')
const {getData,getQueryData} = require("../../database/runSQLQuery")
const sql = require('mssql')
const {sqlSIMS7Config,sqlSIMSNGConfig} = require("../../database/dbConfig")
 const { getEnv, getConfig } = require("../../configurations/envconfig") ;

var randomNum = Math.random()*10;
const config = getConfig();
var emailAddress = "";

Given('I open the Login Page', async function () {
  
    await testController
    .navigateTo(config.siteUrl+"/login")
  });

  Given('I connect to DB and get Data in SIMS7', async function () {
    const result = await getData(sqlSIMS7Config,'Select * from dbo.Tbl_Department', 1);
    for (var i = 0; i < result.length; i++) {
      console.log("Id: " + result[i].Id + " Name: " + result[i].Name);
  }
  });

  Given('I connect to DB and get Data in SIMSNG', async function () {
    const result = await getQueryData(sqlSIMSNGConfig,'Select * from dbo.Tbl_Department');
    for (var i = 0; i < result.length; i++) {
      console.log("Id: " + result[i].Id + " Name: " + result[i].Name);
  }
  });

  When('I click on Me Want It button', async function () {
    await testController
    .click(registerPage.RegisterCustomerPage.MeWantItButton());
  });

  When('I register the new user with email address {string}', async function (emailAddress){
    emailAddress = emailAddress+randomNum;
    await testController
    .navigateTo(config.siteUrl+"/login");
    await testController
    .click(registerPage.RegisterCustomerPage.MeWantItButton())
    .click(registerPage.RegisterCustomerPage.CookieButton())
    .click(registerPage.RegisterCustomerPage.AddCustomerButton());
    await testController
    .click(registerPage.RegisterCustomerPage.EmailAddressInput())
    await testController.typeText(registerPage.RegisterCustomerPage.EmailAddressInput(), emailAddress);
    await testController
   .click(registerPage.RegisterCustomerPage.PasswordInput())
   await testController.typeText(registerPage.RegisterCustomerPage.PasswordInput(), "tushki89");
   await testController
   .click(registerPage.RegisterCustomerPage.RepeatPasswordInput())
   await testController.typeText(registerPage.RegisterCustomerPage.RepeatPasswordInput(), "tushki89");
   await testController
   .click(registerPage.RegisterCustomerPage.SecurityQuestionCombo())
   await testController.click(registerPage.RegisterCustomerPage.GetSecurityQuestion("Paternal grandmother's first name?"));
   await testController
   .click(registerPage.RegisterCustomerPage.SecurityAnswer())
   await testController.typeText(registerPage.RegisterCustomerPage.SecurityAnswer(), "test");
   await testController
   .click(registerPage.RegisterCustomerPage.RegisterButton());
   await testController.expect(registerPage.RegisterCustomerPage.LoginTitle().exists).ok();

   this.emailAddress = emailAddress;
  })

  When('I register the new user with following data', async function (datatable){
    var table = datatable.hashes();
    for (let i=0; i< table.length;i++){
      await testController
    .click(registerPage.RegisterCustomerPage.AddCustomerButton());
      await testController
    .click(registerPage.RegisterCustomerPage.EmailAddressInput())
    await testController.typeText(registerPage.RegisterCustomerPage.EmailAddressInput(), table[i].email+randomNum);
    await testController
   .click(registerPage.RegisterCustomerPage.PasswordInput())
   await testController.typeText(registerPage.RegisterCustomerPage.PasswordInput(), table[i].password);
   await testController
   .click(registerPage.RegisterCustomerPage.RepeatPasswordInput())
   await testController.typeText(registerPage.RegisterCustomerPage.RepeatPasswordInput(), table[i].password);
   await testController
   .click(registerPage.RegisterCustomerPage.SecurityQuestionCombo())
   await testController.click(registerPage.RegisterCustomerPage.GetSecurityQuestion(table[i].securityQuestion));
   await testController
   .click(registerPage.RegisterCustomerPage.SecurityAnswer())
   await testController.typeText(registerPage.RegisterCustomerPage.SecurityAnswer(), table[i].securityAns);
   await testController
   .click(registerPage.RegisterCustomerPage.RegisterButton())
   await testController.expect(registerPage.RegisterCustomerPage.LoginTitle().exists).ok()
    }
  })

  When('I click on Close Welcome Banner button', async function () {
    await testController
    .click(registerPage.RegisterCustomerPage.CookieButton());
  });

  When('I click on Add Customer button', async function () {
    await testController
    .click(registerPage.RegisterCustomerPage.AddCustomerButton());
  });

  When('I enter the email address {string}',async function (emailAddress) {
    await testController
   .click(registerPage.RegisterCustomerPage.EmailAddressInput())
   await testController.typeText(registerPage.RegisterCustomerPage.EmailAddressInput(), emailAddress+randomNum);
  });

  When('I enter the email address with existing email address',async function () {
    if(!this.emailAddress == ""){
      emailAddress = this.emailAddress;
    }
     await testController
    .click(registerPage.RegisterCustomerPage.EmailAddressInput())
    await testController.typeText(registerPage.RegisterCustomerPage.EmailAddressInput(), emailAddress);
   });

  When('I enter the password {string}',async function (password) {
    await testController
   .click(registerPage.RegisterCustomerPage.PasswordInput())
   await testController.typeText(registerPage.RegisterCustomerPage.PasswordInput(), password);
  });

  When('I reenter the password {string}',async function (password) {
    await testController
   .click(registerPage.RegisterCustomerPage.RepeatPasswordInput())
   await testController.typeText(registerPage.RegisterCustomerPage.RepeatPasswordInput(), password);
  });

  When('I enter the Security question {string}',async function (secQuestion) {
    await testController
   .click(registerPage.RegisterCustomerPage.SecurityQuestionCombo())
   await testController.click(registerPage.RegisterCustomerPage.GetSecurityQuestion(secQuestion));
  });

  When('I enter the security answer {string}',async function (secAnswer) {
    await testController
   .click(registerPage.RegisterCustomerPage.SecurityAnswer())
   await testController.typeText(registerPage.RegisterCustomerPage.SecurityAnswer(), secAnswer);
  });

  When('I click on Register button',async function () {
    await testController
   .click(registerPage.RegisterCustomerPage.RegisterButton())
  });

  Then('I verify that the Login title is displayed',async function () {
    await testController.expect(registerPage.RegisterCustomerPage.LoginTitle().exists).ok()
  });

  Then('I verify that the Email Error is displayed',async function () {
    await testController.expect(registerPage.RegisterCustomerPage.EmailErrorDiv().exists).ok()
  });

  module.exports = {
    emailAddress
  }