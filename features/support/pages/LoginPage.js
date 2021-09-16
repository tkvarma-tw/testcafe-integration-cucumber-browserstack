const {Selector} = require('testcafe');
 const {XPathSelector} = require('../../../utilities/xpath-selector')

function select(selector){
    return Selector(selector).with({boundTestRun: testController });
}

exports.LoginPage={

    EmailInputField: function(){
        return select(XPathSelector("//input[@id='email']"));
    },
    PasswordInputField: function(){
        return select(XPathSelector("//input[@id='password']"));
    },
    LoginButton: function(){
        return select(XPathSelector("//button[@id='loginButton']"));
    }

}