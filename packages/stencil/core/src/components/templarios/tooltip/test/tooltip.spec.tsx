import { newSpecPage } from '@stencil/core/testing';
import { TpTooltip } from '../tooltip';

describe('tp-tooltip', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpTooltip],
      html: '<tp-tooltip></tp-tooltip>',
    });
    expect(root).toEqualHtml(`
      <tp-tooltip>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-tooltip>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpTooltip],
      html: `<tp-tooltip></tp-tooltip>`,
    });
    expect(root).toEqualHtml(`
      <tp-tooltip>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-tooltip>
    `);
  });
});
