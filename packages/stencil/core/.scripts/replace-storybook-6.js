const replace = require('replace-in-file');

// replaces storybook preview themes list for ionic 6

const storybook = {
  files: 'packages/stencil/core/.storybook/preview.ts',
  from: '[...list7]',
  to: '[...list6]',
};

replace(storybook)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
