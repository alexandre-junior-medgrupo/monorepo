import { newE2EPage } from '@stencil/core/testing';

describe('tp-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-loader></tp-loader>');
    const element = await page.find('tp-loader');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-loader></tp-loader>');
  });
});
