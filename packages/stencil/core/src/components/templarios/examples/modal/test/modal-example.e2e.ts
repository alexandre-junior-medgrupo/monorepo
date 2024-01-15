import { newE2EPage } from '@stencil/core/testing';

describe('modal-example', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<modal-example></modal-example>');
    const element = await page.find('modal-example');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<modal-example></modal-example>');
  });
});
