import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
    trace: 'on-first-retry',
  },

  projects: [

    {
      name: 'setup',
      testMatch: 'createNewEmployee.setup.ts'
    },

    {
      name: 'cleanUp',
      testMatch: 'deleteData.setup.ts',
      use: { ...devices['Desktop Chrome']},
    },


    {
      name: 'e2e',
      testMatch: 'e2e.spec.ts',
      use: { ...devices['Desktop Chrome'] },
      fullyParallel: false,
      dependencies: ['setup'], 
      teardown: 'cleanUp'
    }, 

  ],

});
