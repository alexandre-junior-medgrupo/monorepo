import { newE2EPage } from '@stencil/core/testing';

describe('sheet-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sheet-example></sheet-example>');
    const element = await page.find('sheet-example');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<sheet-example></sheet-example>');
  });
});
