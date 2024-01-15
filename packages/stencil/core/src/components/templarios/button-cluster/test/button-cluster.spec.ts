import { newSpecPage } from '@stencil/core/testing';
import { TpButtonCluster } from '../button-cluster';

describe('tp-button-cluster', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpButtonCluster],
      html: '<tp-button-cluster></tp-button-cluster>',
    });
    expect(root).toEqualHtml(`
      <tp-button-cluster>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-button-cluster>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpButtonCluster],
      html: `<tp-button-cluster></tp-button-cluster>`,
    });
    expect(root).toEqualHtml(`
      <tp-button-cluster>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-button-cluster>
    `);
  });
});
