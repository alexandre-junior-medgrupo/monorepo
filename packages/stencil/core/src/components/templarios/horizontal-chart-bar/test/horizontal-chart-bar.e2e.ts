import { newE2EPage } from '@stencil/core/testing';

describe('tp-horizontal-chart-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<tp-horizontal-chart-bar></tp-horizontal-chart-bar>',
    );
    const element = await page.find('tp-horizontal-chart-bar');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<tp-horizontal-chart-bar></tp-horizontal-chart-bar>',
    );
  });
});
