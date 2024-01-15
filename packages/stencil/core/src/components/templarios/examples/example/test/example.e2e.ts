import { newE2EPage } from '@stencil/core/testing';

describe('tp-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-example></tp-example>');
    const element = await page.find('tp-example');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-example></tp-example>');
  });
});
