const replace = require('replace-in-file');

// replaces storybook preview themes list for ionic 7

const storybook = {
  files: 'package.json',
  from: '"build": "npm-run-all ionic:install:6 stencil:build styles:clean sass:build styles:move node:replace:storybook:style:6 node:replace:storybook:6 storybook:build",',
  to: '"build": "npm-run-all ionic:install:7 stencil:build styles:clean sass:build styles:move node:replace:storybook:style:7 node:replace:storybook:7 storybook:build",',
};

replace(storybook)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
