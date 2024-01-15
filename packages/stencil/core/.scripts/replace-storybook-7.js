const replace = require('replace-in-file');

// replaces storybook preview themes list for ionic 7

const storybook = {
  files: '.storybook/preview.ts',
  from: '[...list6]',
  to: '[...list7]',
};

replace(storybook)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
