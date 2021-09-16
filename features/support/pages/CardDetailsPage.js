const {Selector} = require('testcafe');
 const {XPathSelector} = require('../../../utilities/xpath-selector')

function select(selector){
    return Selector(selector).with({boundTestRun: testController });
}

exports.CardDetailsPage={

    AddNewCardButton: function(){
        return select(XPathSelector("//mat-panel-title[text()=' Add new card ']"))
    },

    NameInput: function(){
        return select(XPathSelector("//mat-label[text()='Name']/parent::label/parent::span/parent::div/input"));
    },
    CardNumberInput: function(){
        return select(XPathSelector("//mat-label[text()='Card Number']/parent::label/parent::span/parent::div/input"));
    },
    ExpiryMonthInput: function(){
        return select(XPathSelector("//mat-label[text()='Expiry Month']/preceding::select"));
    },
    ExpiryYearInput: function(){
        return select(XPathSelector("//mat-label[text()='Expiry Year']/preceding::select[1]"));
    },
    CardRadioButton: function(){
        return select(XPathSelector("//mat-row[1]/mat-cell[1]/mat-radio-button"));
    },
    CardContinueButton: function(){
        return select(XPathSelector("//button[@aria-label='Proceed to review']"));
    }
}