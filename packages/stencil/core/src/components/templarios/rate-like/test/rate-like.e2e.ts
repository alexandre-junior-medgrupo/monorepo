import { newE2EPage } from '@stencil/core/testing';

describe('tp-rate-like', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-rate-like></tp-rate-like>');
    const element = await page.find('tp-rate-like');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-rate-like></tp-rate-like>');
  });
});
