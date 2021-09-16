const {Selector} = require('testcafe');
 const {XPathSelector} = require('../../../utilities/xpath-selector')

function select(selector){
    return Selector(selector).with({boundTestRun: testController });
}

exports.ReviewProductPage={

    CompletePurchaseButton: function(){
        return select(XPathSelector("//button[@aria-label='Complete your purchase']"));
    },
    PlaceOrderHeader: function(){
        return select(XPathSelector("//h1[contains(text(), 'Thank you for your purchase!')]"));
    }

}