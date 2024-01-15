import { newSpecPage } from '@stencil/core/testing';
import { SnackbarExample } from '../snackbar-example';

describe('snackbar-example', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SnackbarExample],
      html: '<snackbar-example></snackbar-example>',
    });
    expect(root).toEqualHtml(`
      <snackbar-example>
        <mock:shadow-root>
        </mock:shadow-root>
      </snackbar-example>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SnackbarExample],
      html: `<snackbar-example></snackbar-example>`,
    });
    expect(root).toEqualHtml(`
      <snackbar-example>
        <mock:shadow-root>
        </mock:shadow-root>
      </snackbar-example>
    `);
  });
});
