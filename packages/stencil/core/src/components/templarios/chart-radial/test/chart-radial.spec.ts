import { newSpecPage } from '@stencil/core/testing';
import { TpChartRadial } from '../chart-radial';

describe('tp-chart-radial', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpChartRadial],
      html: '<tp-chart-radial></tp-chart-radial>',
    });
    expect(root).toEqualHtml(`
      <tp-chart-radial>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-chart-radial>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpChartRadial],
      html: `<tp-chart-radial></tp-chart-radial>`,
    });
    expect(root).toEqualHtml(`
      <tp-chart-radial>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-chart-radial>
    `);
  });
});
