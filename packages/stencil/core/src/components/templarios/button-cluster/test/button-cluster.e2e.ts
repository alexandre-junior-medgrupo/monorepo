import { newE2EPage } from '@stencil/core/testing';

describe('tp-button-cluster', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-button-cluster></tp-button-cluster>');
    const element = await page.find('tp-button-cluster');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<tp-button-cluster></tp-button-cluster>');
  });
});
