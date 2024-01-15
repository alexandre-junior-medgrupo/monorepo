import { newSpecPage } from '@stencil/core/testing';
import { TpInputContainer } from '../input-container';

describe('tp-input-container', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TpInputContainer],
      html: '<tp-input-container></tp-input-container>',
    });
    expect(root).toEqualHtml(`
      <tp-input-container>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-input-container>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [TpInputContainer],
      html: `<tp-input-container></tp-input-container>`,
    });
    expect(root).toEqualHtml(`
      <tp-input-container>
        <mock:shadow-root>
        </mock:shadow-root>
      </tp-input-container>
    `);
  });
});
