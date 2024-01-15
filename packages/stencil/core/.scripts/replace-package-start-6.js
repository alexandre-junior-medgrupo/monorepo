const replace = require('replace-in-file');

// replaces storybook preview themes list for ionic 6

const storybook = {
  files: 'package.json',
  from: '"start": "npm-run-all ionic:install:7 node:replace:storybook:style:7 node:replace:storybook:7 --parallel sass:start stencil:start storybook:start",',
  to: '"start": "npm-run-all ionic:install:6 node:replace:storybook:style:6 node:replace:storybook:6 --parallel sass:start stencil:start storybook:start",',
};

replace(storybook)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
