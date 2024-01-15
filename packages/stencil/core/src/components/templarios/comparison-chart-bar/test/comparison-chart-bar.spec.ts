import { newSpecPage } from '@stencil/core/testing';
import { TpComparisonChartBar } from '../comparison-chart-bar';

describe('tp-comparison-chart-bar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpComparisonChartBar],
      html: '<tp-comparison-chart-bar></tp-comparison-chart-bar>',
    });
    expect(root).toEqualHtml(`
      <tp-comparison-chart-bar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-comparison-chart-bar>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpComparisonChartBar],
      html: `<tp-comparison-chart-bar></tp-comparison-chart-bar>`,
    });
    expect(root).toEqualHtml(`
      <tp-comparison-chart-bar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-comparison-chart-bar>
    `);
  });
});
