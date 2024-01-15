import { newSpecPage } from '@stencil/core/testing';
import { TpExample } from '../example';

describe('tp-example', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpExample],
      html: '<tp-example></tp-example>',
    });
    expect(root).toEqualHtml(`
      <tp-example>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-example>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpExample],
      html: `<tp-example></tp-example>`,
    });
    expect(root).toEqualHtml(`
      <tp-example>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-example>
    `);
  });
});
