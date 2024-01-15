import { newSpecPage } from '@stencil/core/testing';
import { DialogExample } from '../dialog-example';

describe('dialog-example', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DialogExample],
      html: '<dialog-example></dialog-example>',
    });
    expect(root).toEqualHtml(`
      <dialog-example>
        <mock:shadow-root>
        </mock:shadow-root>
      </dialog-example>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DialogExample],
      html: `<dialog-example></dialog-example>`,
    });
    expect(root).toEqualHtml(`
      <dialog-example>
        <mock:shadow-root>
        </mock:shadow-root>
      </dialog-example>
    `);
  });
});
