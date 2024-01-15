import { newE2EPage } from '@stencil/core/testing';

describe('tp-input-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-input-container></tp-input-container>');
    const element = await page.find('tp-input-container');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-input-container></tp-input-container>');
  });
});
