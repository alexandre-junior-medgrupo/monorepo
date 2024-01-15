import { newE2EPage } from '@stencil/core/testing';

describe('tp-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-tooltip></tp-tooltip>');
    const element = await page.find('tp-tooltip');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-tooltip></tp-tooltip>');
  });
});
