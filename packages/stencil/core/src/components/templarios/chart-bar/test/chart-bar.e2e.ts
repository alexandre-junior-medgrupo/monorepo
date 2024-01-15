import { newE2EPage } from '@stencil/core/testing';

describe('tp-chart-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-chart-bar></tp-chart-bar>');
    const element = await page.find('tp-chart-bar');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-chart-bar></tp-chart-bar>');
  });
});
