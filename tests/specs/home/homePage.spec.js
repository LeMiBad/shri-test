const { expect } = require('@playwright/test');

const { test } = require("../../test");


test.describe('Страница Home', () => {
  test('Проверка закрытия navbar после перехода по ссылке @bug_id=4 @mobile', async ({ homePage, catalogPage, checkScreenshot }) => {
    await homePage.goto();

    await homePage.page.setViewportSize({width: 570, height: 1280});

    await expect(homePage.burgerButton).toBeVisible() 

    await homePage.burgerButton.click() 

    await expect(homePage.catalogLink).toBeVisible() 

    await homePage.catalogLink.click();

    await expect(catalogPage.catalogContainer).toBeVisible() 

    await checkScreenshot(catalogPage)
  });

});
