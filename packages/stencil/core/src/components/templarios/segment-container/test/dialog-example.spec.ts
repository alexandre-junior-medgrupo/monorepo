import { newSpecPage } from '@stencil/core/testing';
import { TpSegmentContainer } from '../segment-container';

describe('tp-segment-container', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpSegmentContainer],
      html: '<tp-segment-container></tp-segment-container>',
    });
    expect(root).toEqualHtml(`
      <tp-segment-container>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-segment-container>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpSegmentContainer],
      html: `<tp-segment-container></tp-segment-container>`,
    });
    expect(root).toEqualHtml(`
      <tp-segment-container>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-segment-container>
    `);
  });
});
