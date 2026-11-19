import { test, expect } from '../fixtures/mainPagePlay';
import { MainPagePlay } from '../models/MainPagePlay';

test.describe('Тесты главной страницы', () => {
  // beforeEach удален т.к. выполняется на уровне Фикстуры
  // в Фикстуре создаем экземпляр класса MainPagePlay и открываем страницу

  //1 done
  test('Проверка отображения элементов навигации хедера', async ({ mainPage }) => {
    await mainPage.checkElementsVisability();
  });

  //2 done
  test('Проверка названия элементов навигации хедера', async ({ mainPage }) => {
    await mainPage.checkElementsText();
  });

  //3 done
  test('Проверка атрибутов href элементов навигации хедера', async ({ mainPage }) => {
    await mainPage.checkElementsHrefAttribute();
  });

  test('Проверка переключения в dark mode', async ({ mainPage }) => {
    await test.step('Нажатие на иконку переключения лайт мода', async () => {
      mainPage.clickSwitchLightModeIcon();
      mainPage.clickSwitchLightModeIcon();
    });
    await test.step('Проверка смены значения атрибута', async () => {
      await mainPage.checkDataThemeAttributeValue();
    });
  });

  test(`Проверка стилей со светлой темой страницы`, async ({ mainPage }) => {
    await test.step('Установка светлой темы', async () => {
      await mainPage.setLightMode();
    });
    await test.step('Скриншотная проверка с активной светлой темой', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });

  test(`Проверка стилей с темной темой страницы`, async ({ mainPage }) => {
    await test.step('Установка темной темы', async () => {
      await mainPage.setDarkMode();
    });
    await test.step('Скриншотная проверка с активной темной темой', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });

  // test('Проверка стилей активного мода страницы', async ({ page }) => {
  //   await expect(page).toHaveScreenshot('image.png');
  // });
});
