import { newSpecPage } from '@stencil/core/testing';
import { TpAlert } from '../alert';

describe('tp-alert', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpAlert],
      html: '<tp-alert></tp-alert>',
    });
    expect(root).toEqualHtml(`
      <tp-alert>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-alert>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpAlert],
      html: `<tp-alert></tp-alert>`,
    });
    expect(root).toEqualHtml(`
      <tp-alert>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-alert>
    `);
  });
});
