const replace = require('replace-in-file');

// fixes ionic 6 'context' error

const ionic = {
  files: 'node_modules/@ionic/core/dist/collection/global/ionic-global.js',
  from: 'Context.config = config;',
  to: '',
};

replace(ionic)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
