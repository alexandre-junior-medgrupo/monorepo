const replace = require('replace-in-file');

// fixes angular component wrappers import errors

const angular1 = {
  files: 'dist/angular/esm2022/lib/templarios.module.mjs',
  from: /templarios-core/g,
  to: '../../../core',
};

const angular2 = {
  files: [
    'dist/angular/fesm2022/templarios-angular.mjs',
    'dist/angular/fesm2022/templarios-angular.mjs.map',
  ],
  from: /templarios-core/g,
  to: '../../core',
};

const angular3 = {
  files: 'dist/angular/lib/stencil-generated/components.d.ts',
  from: /templarios-core/g,
  to: '../../../core/dist/types',
};

replace(angular1)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

replace(angular2)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

replace(angular3)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
