import { newSpecPage } from '@stencil/core/testing';
import { TpHorizontalChartBar } from '../horizontal-chart-bar';

describe('tp-horizontal-chart-bar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpHorizontalChartBar],
      html: '<tp-horizontal-chart-bar></tp-horizontal-chart-bar>',
    });
    expect(root).toEqualHtml(`
      <tp-horizontal-chart-bar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-horizontal-chart-bar>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpHorizontalChartBar],
      html: `<tp-horizontal-chart-bar></tp-horizontal-chart-bar>`,
    });
    expect(root).toEqualHtml(`
      <tp-horizontal-chart-bar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-horizontal-chart-bar>
    `);
  });
});
