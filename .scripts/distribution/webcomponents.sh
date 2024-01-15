#!/usr/bin/env bash

set -e

npx shx rm -rf dist/web-components
npx shx mkdir dist/web-components

# web-components
npx shx mkdir dist/web-components/core
npx shx mkdir dist/web-components/angular
npx shx mkdir dist/web-components/react
npx shx mkdir dist/web-components/vue

# move
npx shx cp -r packages/stencil/core/dist packages/stencil/core/loader packages/stencil/core/assets packages/stencil/core/styles packages/stencil/core/package.json dist/web-components/core/

echo -e "!!! TEMPLARIOS: elementor webcomponents Done!!!"