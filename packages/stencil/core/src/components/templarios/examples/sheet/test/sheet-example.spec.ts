import { newSpecPage } from '@stencil/core/testing';
import { SheetExample } from '../sheet-example';

describe('sheet-example', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SheetExample],
      html: '<sheet-example></sheet-example>',
    });
    expect(root).toEqualHtml(`
      <sheet-example>
        <mock:shadow-root>
        </mock:shadow-root>
      </sheet-example>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SheetExample],
      html: `<sheet-example></sheet-example>`,
    });
    expect(root).toEqualHtml(`
      <sheet-example>
        <mock:shadow-root>
        </mock:shadow-root>
      </sheet-example>
    `);
  });
});
