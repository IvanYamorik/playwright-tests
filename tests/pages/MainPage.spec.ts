import { test, expect } from '../fixtures/mainPage';
import { MainPage } from '../models/MainPage';

test.describe('main page tests', () => {
  test('Check of showing header navigation elements', async ({ mainPage }) => {
    await mainPage.checkElementsVisability();
  });

  test('Check header navigation elements have correct naming', async ({ mainPage }) => {
    await mainPage.checkElementsText();
  });

  test('Check atributes href of header navigation elements', async ({ mainPage }) => {
    await mainPage.checkElementsHrefAttribute();
  });

  test('Check of light/dark mode switch', async ({ mainPage }) => {
    await test.step('Click on the light mode switch icon', async () => {
      await mainPage.clickSwitchLightModeIcon();
    });
    await test.step('Check the change of attribute value', async () => {
      await mainPage.checkDataThemeAttributeValue();
    });
  });

  test(`Check styles with active Light mode`, async ({ mainPage }) => {
    await test.step('Set the Light mode', async () => {
      await mainPage.setLightMode();
    });
    await test.step('Screenshot test with active Light mode', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });

  test(`Check styles with active Dark mode`, async ({ mainPage }) => {
    await test.step('Set the Dark mode', async () => {
      await mainPage.setDarkMode();
    });
    await test.step('Screenshot test with active Dark mode', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
