const replace = require('replace-in-file');

// replaces storybook preview themes list for ionic 6

const storybook = {
  files: 'package.json',
  from: '"start": "npm-run-all ionic:install:7',
  to: '"start": "npm-run-all ionic:install:6',
};

replace(storybook)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
