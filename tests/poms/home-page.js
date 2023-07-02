const { reversePath } = require("../../helpers/reversePath");
const { BasicPage } = require("./basic-page");

class HomePage extends BasicPage {
    burgerButton;
    catalogLink;

    constructor(page) {
        super(page)
        this.burgerButton = this.page.locator('.Application-Toggler')
        this.catalogLink = this.page.locator('.nav-link[href="/hw/store/catalog"]')
    }

    goto() {
        this.page.goto(reversePath(''))
    }

}

module.exports = { HomePage }