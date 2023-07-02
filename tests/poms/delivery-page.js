const { reversePath } = require("../../helpers/reversePath");
const { BasicPage } = require("./basic-page");

class DeliveryPage extends BasicPage {
    constructor(page) {
        super(page)
    }

    goto() {
        this.page.goto(reversePath('delivery'))
    }
}

module.exports = { DeliveryPage }