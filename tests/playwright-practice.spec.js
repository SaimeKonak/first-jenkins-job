import { test } from '@playwright/test';

test('Google test', async ({page}) => {
    //navigate to http://google.com
    await page.goto('http://google.com');
    //pause for 3 seconds
    await page.waitForTimeout(3000);
});

