import { newE2EPage } from '@stencil/core/testing';

describe('dialog-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<dialog-example></dialog-example>');
    const element = await page.find('dialog-example');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<dialog-example></dialog-example>');
  });
});
