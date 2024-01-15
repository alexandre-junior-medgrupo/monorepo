import { newSpecPage } from '@stencil/core/testing';
import { TpLoader } from '../loader';

describe('tp-loader', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpLoader],
      html: '<tp-loader></tp-loader>',
    });
    expect(root).toEqualHtml(`
      <tp-loader>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-loader>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpLoader],
      html: `<tp-loader></tp-loader>`,
    });
    expect(root).toEqualHtml(`
      <tp-loader>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-loader>
    `);
  });
});
