const replace = require('replace-in-file');

// replaces storybook preview themes list for ionic 7

const storybook = {
  files: 'packages/stencil/core/.storybook/preview.ts',
  from: '-7',
  to: '-6',
};

replace(storybook)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
