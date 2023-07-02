const { reversePath } = require("../../helpers/reversePath");
const { BasicPage } = require("./basic-page");

class CartPage extends BasicPage {
    cartDetails;
    inputName;
    inputPhone;
    inputAddress;
    submitButton;

    constructor(page) {
        super(page)
        this.cartDetails = this.page.locator('.Cart')
        this.inputName = this.page.locator('#f-name')
        this.inputPhone = this.page.locator('#f-phone')
        this.inputAddress = this.page.locator('#f-address')
        this.submitButton = this.page.locator('.Form-Submit')

    }

    goto() {
        this.page.goto(reversePath('cart'))
    }
}

module.exports = { CartPage }