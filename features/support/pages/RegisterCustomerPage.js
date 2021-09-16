const {Selector} = require('testcafe');
 const {XPathSelector} = require('../../../utilities/xpath-selector')

function select(selector){
    return Selector(selector).with({boundTestRun: testController });
}

exports.RegisterCustomerPage={

    MeWantItButton: function(){
        return select(XPathSelector("//a[@aria-label='dismiss cookie message']"))
    },

    CookieButton: function(){
        return select(XPathSelector("//button[@aria-label='Close Welcome Banner']"))
    },

    AddCustomerButton: function(){
        return select(XPathSelector("//a[@href='#/register']"));
    },
    EmailAddressInput: function(){
        return select(XPathSelector("//input[@id='emailControl']"));
    },
    PasswordInput: function(){
        return select(XPathSelector("//input[@id='passwordControl']"));
    },
    RepeatPasswordInput: function(){
        return select(XPathSelector("//input[@id='repeatPasswordControl']"));
    },
    SecurityQuestionCombo: function(){
        return select(XPathSelector("//mat-select[@aria-label='Selection list for the security question']"));
    },
    GetSecurityQuestion: function(option){
        return select(XPathSelector("//span[contains(text(), \""+ option+"\")]/parent::mat-option"));
    },

    SecurityAnswer: function(){
        return select(XPathSelector("//input[@id='securityAnswerControl']"));
    },
    RegisterButton: function(){
        return select(XPathSelector("//button[@id='registerButton']"));
    },
    LoginTitle: function(){
        return select(XPathSelector("//h1[text()='Login']"));
    },

    EmailErrorDiv: function(){
        return select(XPathSelector("//div[@class='error'][text()='Email must be unique']"));
    }


}