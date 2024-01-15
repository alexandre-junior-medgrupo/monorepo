const replace = require('replace-in-file');

// replaces storybook manager-head for ionic 6

const storybook = {
  files: 'packages/stencil/core/.storybook/manager-head.html',
  from: '-6',
  to: '-7',
};

replace(storybook)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
