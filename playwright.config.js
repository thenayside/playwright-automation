// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  retries: 0,

  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },
  reporter: "html",

  projects: [
    {
      name: "chrome",
      use: {
        actionTimeout: 30000,
        navigationTimeout: 30 * 1000,
        browserName: "chromium",
        headless: true, // Optional
        screenshot: "on",
        trace: "on", //retain-on-failure','off'
        // viewport:{width:800,height:800},
      },
    },
    //   {
    //     name:"safari",
    //       use: {
    //   actionTimeout: 30000,
    //   navigationTimeout: 30 * 1000,
    //   browserName: 'webkit',
    //   headless: false, // Optional
    //   screenshot: 'on',
    //   trace: 'on',  //retain-on-failure','off'
    //   // ...devices['iPhone Air'],
    // },
    //   }
  ],
});
