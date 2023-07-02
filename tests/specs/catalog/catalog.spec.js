const { expect } = require('@playwright/test');

const { test } = require("../../test");

test.describe('Страница Catalog', () => {
  test('Компонент карточки соответствует макету @bug-id=9', async ({ catalogPage, checkScreenshot }) => {
    await catalogPage.gotoId();

    await expect(catalogPage.productDetails).toBeVisible()

    await checkScreenshot(catalogPage.productDetails)
  });

  test('User Flow - Cообщение об успешной валидации формы в корзине @bug-id=5 @bug-id=6 @bug-id=7 @bug-id=8 @bug-id=10', async ({ catalogPage, cartPage, checkScreenshot }) => {
    await catalogPage.gotoId()

    await expect(catalogPage.addToCartButton).toBeVisible()
    await catalogPage.addToCartButton.click()

    await cartPage.goto()

    await expect(cartPage.inputName).toBeVisible()
    await expect(cartPage.inputPhone).toBeVisible()
    await expect(cartPage.inputAddress).toBeVisible()
    await expect(cartPage.submitButton).toBeVisible()

    await cartPage.inputName.fill('33/33')
    await cartPage.inputPhone.fill('+333333333333')
    await cartPage.inputAddress.fill('33/33')
    await cartPage.submitButton.click()

    await cartPage.page.waitForSelector(':has-text("Well done!")', { timeout: 1500 })
    await checkScreenshot(cartPage.cartDetails)
  })

});
