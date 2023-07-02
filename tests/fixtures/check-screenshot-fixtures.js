const { expect } = require('@playwright/test');

const { BasicPage } = require('../poms/basic-page');
const { slugify } = require('../../helpers/slugify');

const createCheckScreenshotFixture =
    (testInfo) =>
    async (target, options = {}) => {
        testInfo.snapshotSuffix = '';
        
        const fileName = `${testInfo.titlePath.slice(1).map(slugify).join('-')}.png`;
        let screenshot;

        if (target instanceof BasicPage) {
            screenshot = await target.page.screenshot(options);
        } else {
            screenshot = await target.screenshot(options);
        }

        expect(screenshot).toMatchSnapshot(fileName, options);
    };

module.exports = { createCheckScreenshotFixture}