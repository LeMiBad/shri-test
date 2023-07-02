const { createWorkerFixture } = require('playwright-msw')
const { test: base } = require('@playwright/test');

const { createCheckScreenshotFixture } = require('./fixtures/check-screenshot-fixtures')
const { makePomFixtures } = require('./fixtures/make-pom-fixtures');
const { handlers } = require('./handlers/mock.handlers');

require('dotenv').config()

const test = base.extend({
    checkScreenshot: async ({}, use, testInfo) => {
        await use(createCheckScreenshotFixture(testInfo));
    },
    worker: createWorkerFixture(handlers),
    baseURL: async ({}, use) => {
        await use(process.env.URL);
    },
    ...makePomFixtures(),
});



test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
        window.addEventListener('DOMContentLoaded', () => {
            const styleElement = document.createElement('style');

            styleElement.textContent = `*,
            *::before,
            *::after {
            caret-color: transparent !important;
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
            }`;

            document.body.appendChild(styleElement);
        });
    });
    await page.evaluate(() => document.fonts.ready);


});

module.exports = { test }