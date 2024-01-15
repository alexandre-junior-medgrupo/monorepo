import { newE2EPage } from '@stencil/core/testing';

describe('tp-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-alert></tp-alert>');
    const element = await page.find('tp-alert');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-alert></tp-alert>');
  });
});
