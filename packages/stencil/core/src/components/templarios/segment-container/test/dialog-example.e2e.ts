import { newE2EPage } from '@stencil/core/testing';

describe('tp-segment-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-segment-container></tp-segment-container>');
    const element = await page.find('tp-segment-container');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-segment-container></tp-segment-container>');
  });
});
