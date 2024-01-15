import { newSpecPage } from '@stencil/core/testing';
import { TpRateLike } from '../rate-like';

describe('tp-rate-like', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpRateLike],
      html: '<tp-rate-like></tp-rate-like>',
    });
    expect(root).toEqualHtml(`
      <tp-rate-like>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-rate-like>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpRateLike],
      html: `<tp-rate-like></tp-rate-like>`,
    });
    expect(root).toEqualHtml(`
      <tp-rate-like>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-rate-like>
    `);
  });
});
