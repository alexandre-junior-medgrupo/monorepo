import { newSpecPage } from '@stencil/core/testing';
import { TpChartBar } from '../chart-bar';

describe('tp-chart-bar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpChartBar],
      html: '<tp-chart-bar></tp-chart-bar>',
    });
    expect(root).toEqualHtml(`
      <tp-chart-bar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-chart-bar>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpChartBar],
      html: `<tp-chart-bar></tp-chart-bar>`,
    });
    expect(root).toEqualHtml(`
      <tp-chart-bar>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-chart-bar>
    `);
  });
});
