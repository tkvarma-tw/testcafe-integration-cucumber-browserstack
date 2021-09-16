const {Selector} = require('testcafe');
 const {XPathSelector} = require('../../../utilities/xpath-selector')

function select(selector){
    return Selector(selector).with({boundTestRun: testController });
}


exports.AddressPage={

    AddNewAddressButton: function(){
        return select(XPathSelector("//span[contains(text(), 'Add New Address')]"))
    },

    CountryInput: function(){
        return select(XPathSelector("//input[@data-placeholder='Please provide a country.']"))
    },

    NameInput: function(){
        return select(XPathSelector("//input[@data-placeholder='Please provide a name.']"));
    },
    MobileNumberInput: function(){
        return select(XPathSelector("//input[@data-placeholder='Please provide a mobile number.']"));
    },
    ZipCodeInput: function(){
        return select(XPathSelector("//input[@data-placeholder='Please provide a ZIP code.']"));
    },
    AddressInput: function(){
        return select(XPathSelector("//textarea[@id='address']"));
    },
    CityInput: function(){
        return select(XPathSelector("//input[@data-placeholder='Please provide a city.']"));
    },
    StateInput: function(){
        return select(XPathSelector("//input[@data-placeholder='Please provide a state.']"));
    },

    SubmitButton: function(){
        return select(XPathSelector("//button[@id='submitButton']"));
    },
    AddressRadioButton: function(){
        return select(XPathSelector("//mat-row[1]/mat-cell[1]/mat-radio-button"));
    },
    AddressContinueButton: function(){
        return select(XPathSelector("//button[@aria-label='Proceed to payment selection']"));
    },

    DeliveryRadioButton: function(){
        return select(XPathSelector("//mat-row[1]/mat-cell[1]/mat-radio-button"));
    },
    DeliverContinueButton: function(){
        return select(XPathSelector("//button[@aria-label='Proceed to delivery method selection']"));
    }

    

}