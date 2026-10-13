import { defineConfig, devices } from '@playwright/test';

// Browser checks for layout, navigation and console errors.
// Runs against the production build served by `astro preview` (`--ignore-lock` keeps it in the
// foreground; Astro otherwise backgrounds the server when it detects an AI agent).
// First run on a new machine: `npx playwright install chromium`.
const PORT = 4321;

export default defineConfig({
  testDir: './tests',
  outputDir: './test-results',
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    // Optional: point at a preinstalled Chromium (e.g. in cloud sessions) instead of downloading one.
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
      : {},
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
    { name: 'tablet', use: { ...devices['Desktop Chrome'], viewport: { width: 834, height: 1112 } } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    command: `npm run build && npm run preview -- --port ${PORT} --ignore-lock`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
