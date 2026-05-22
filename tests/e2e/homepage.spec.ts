import { expect, test } from '@playwright/test'

test('homepage renders core landmarks and hero heading', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Marca/)
  await expect(
    page.getByRole('navigation', { name: /principal/i }),
  ).toBeVisible()
  await expect(page.getByRole('main')).toBeVisible()
  await expect(page.getByRole('contentinfo')).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})
