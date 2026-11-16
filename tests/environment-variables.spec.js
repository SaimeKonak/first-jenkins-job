import { test, expect } from '@playwright/test';

test('@auth Access environment variables', async ({ page }) => {
  console.log(`Username is: ${process.env.PRACTICE_USERNAME}`);
  console.log(`Password is: ${process.env.PRACTICE_PASSWORD}`);
  await page.goto(`https://${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}@the-internet-5chk.onrender.com/basic_auth`);
});  