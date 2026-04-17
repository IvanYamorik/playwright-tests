import { test, expect, Locator, Page } from '@playwright/test';
import { MainPage } from '../models/MainPage';

let mainPage: MainPage;

test.describe('main page tests', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });

  test('Check of showing header navigation elements', async ({ page }) => {
    await mainPage.checkElementsVisability();
  });

  test('Check header navigation elements have correct naming', async ({ page }) => {
    await mainPage.checkElementsText();
  });

  test('Check atributes href of header navigation elements', async ({ page }) => {
    await mainPage.checkElementsHrefAttribute();
  });

  test('Check of light/dark mode switch', async ({ page }) => {
    await test.step('Click on the light mode switch icon', async () => {
      await mainPage.clickSwitchLightModeIcon();
    });
    await test.step('Check the change of attribute value', async () => {
      await mainPage.checkDataThemeAttributeValue();
    });
  });

  test(`Check styles with active Light mode`, async ({ page }) => {
    await test.step('Set the Light mode', async () => {
      await mainPage.setLightMode();
    });
    await test.step('Screenshot test with active Light mode', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });

  test(`Check styles with active Dark mode`, async ({ page }) => {
    await test.step('Set the Dark mode', async () => {
      await mainPage.setDarkMode();
    });
    await test.step('Screenshot test with active Dark mode', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
