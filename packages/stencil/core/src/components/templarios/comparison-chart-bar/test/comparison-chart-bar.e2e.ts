import { newE2EPage } from '@stencil/core/testing';

describe('tp-comparison-chart-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<tp-comparison-chart-bar></tp-comparison-chart-bar>',
    );
    const element = await page.find('tp-comparison-chart-bar');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<tp-comparison-chart-bar></tp-comparison-chart-bar>',
    );
  });
});
