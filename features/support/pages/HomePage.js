const {Selector} = require('testcafe');
 const {XPathSelector} = require('../../../utilities/xpath-selector')

function select(selector){
    return Selector(selector).with({boundTestRun: testController });
}

exports.HomePage={

    AccountButton: function(){
        return select(XPathSelector("//button[@id='navbarAccount']"));
    },
    LoginButton: function(){
        return select(XPathSelector("//button[@id='navbarLoginButton']"));
    },
    LogoutButton: function(){
        return select(XPathSelector("//button[@id='navbarLogoutButton']"));
    },
    CheckOutButton: function(){
        return select(XPathSelector("//button[@id='checkoutButton']"));
    },
    GetAddToCartProduct: function(product){
        return select(XPathSelector("//div[contains(text(), '"+product+"')]/ancestor::mat-card//button"));
    },
    GetProductCount: function(){
        return select(XPathSelector("//span[contains(text(), 'Your Basket')]/following-sibling::span[contains(text(),'1')]"));
    },

    ShowCartButton: function(){
        return select(XPathSelector("//button[@aria-label='Show the shopping cart']"));
    },

    CheckoutButton: function(){
        return select(XPathSelector("//button[@id='checkoutButton']"));
    }

}