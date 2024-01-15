import { newE2EPage } from '@stencil/core/testing';

describe('snackbar-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<snackbar-example></snackbar-example>');
    const element = await page.find('snackbar-example');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<snackbar-example></snackbar-example>');
  });
});
