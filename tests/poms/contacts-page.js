const { reversePath } = require("../../helpers/reversePath");
const { BasicPage } = require("./basic-page");

class ContactsPage extends BasicPage {
    constructor(page) {
        super(page)
    }

    goto() {
        this.page.goto(reversePath('contacts'))
    }
}

module.exports = { ContactsPage }