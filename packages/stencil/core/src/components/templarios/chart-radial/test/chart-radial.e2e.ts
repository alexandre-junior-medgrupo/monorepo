import { newE2EPage } from '@stencil/core/testing';

describe('tp-chart-radial', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-chart-radial></tp-chart-radial>');
    const element = await page.find('tp-chart-radial');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-chart-radial></tp-chart-radial>');
  });
});
