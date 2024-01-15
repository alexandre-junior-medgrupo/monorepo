import { newSpecPage } from '@stencil/core/testing';
import { ModalExample } from '../modal-example';

describe('modal-example', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ModalExample],
      html: '<modal-example></modal-example>',
    });
    expect(root).toEqualHtml(`
      <modal-example>
        <mock:shadow-root>
        </mock:shadow-root>
      </modal-example>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ModalExample],
      html: `<modal-example></modal-example>`,
    });
    expect(root).toEqualHtml(`
      <modal-example>
        <mock:shadow-root>
        </mock:shadow-root>
      </modal-example>
    `);
  });
});
