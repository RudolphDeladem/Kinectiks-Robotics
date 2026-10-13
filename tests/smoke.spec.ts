import { test, expect } from '@playwright/test';

const NAV = ['Home', 'About', 'Products', 'Team', 'News'];

test('home renders without browser errors or horizontal scroll', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

  await page.goto('/');
  await expect(page.locator('header [aria-label$="home"]')).toBeVisible();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
  expect(errors).toEqual([]);
});

test('primary navigation and Contact Us button', async ({ page }) => {
  await page.goto('/');
  const header = page.locator('header');

  const toggle = header.locator('[data-menu-toggle]');

  // Narrow viewports collapse the nav behind the menu button.
  if (await toggle.isVisible()) {
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const menu = page.locator('#mobile-menu');
    await expect(menu.getByRole('link')).toContainText(NAV.map((n) => new RegExp(n)).concat(/Contact us/i, /@/));
  } else {
    const nav = header.getByRole('navigation', { name: 'Primary', exact: true });
    await expect(nav.getByRole('link')).toHaveText(NAV);
    await expect(header.locator('.header-cta')).toHaveText(/Contact us/i);
  }
});
