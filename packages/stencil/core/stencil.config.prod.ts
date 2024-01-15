import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'templarios',
  plugins: [sass()],
  tsconfig: 'tsconfig.prod.json',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'src/**/*.{svg}',
          dest: 'dist/components/assets',
          warn: true,
        },
      ],
    },
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: 'src/**/*.{svg}',
          dest: 'dist/components/assets',
          warn: true,
        },
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'templarios-core',
      directivesProxyFile:
        '../component-wrappers/angular-library/projects/templarios/src/lib/stencil-generated/components.ts',
      directivesArrayFile:
        '../component-wrappers/angular-library/projects/templarios/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
