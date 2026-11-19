import { test as base } from '@playwright/test';
import { MainPagePlay } from '../models/MainPagePlay';

// Declare the types of your fixtures.
type MyFixtures = {
  mainPage: MainPagePlay;
};

// Extend base test by providing "mainPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    // Set up the fixture.
    const mainPage = new MainPagePlay(page);
    await mainPage.openMainPage();

    // Use the fixture value in the test.
    await use(mainPage);
  },
});
export { expect } from '@playwright/test';
