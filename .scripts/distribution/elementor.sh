#!/usr/bin/env bash

set -e

npx shx rm -rf dist/elementor
npx shx mkdir dist/elementor

# elementor
npx shx mkdir dist/elementor/templarios-ecommerce
npx shx mkdir dist/elementor/templarios-institucional
npx shx mkdir dist/elementor/templarios-website

# templarios-ecommerce
# create directories
npx shx mkdir dist/elementor/templarios-ecommerce/utils
npx shx mkdir dist/elementor/templarios-ecommerce/web-components
npx shx mkdir dist/elementor/templarios-ecommerce/widgets
npx shx mkdir dist/elementor/templarios-ecommerce/widgets/core
npx shx mkdir dist/elementor/templarios-ecommerce/widgets/ecommerce

# move
npx shx cp -r packages/elementor/index.php dist/elementor/templarios-ecommerce
npx shx cp -r packages/elementor/utils/* dist/elementor/templarios-ecommerce/utils
npx shx cp -r packages/elementor/widgets/core/* dist/elementor/templarios-ecommerce/widgets/core
npx shx cp -r packages/elementor/widgets/ecommerce/* dist/elementor/templarios-ecommerce/widgets/ecommerce
npx shx cp -r packages/stencil/core/dist packages/stencil/core/loader packages/stencil/core/assets packages/stencil/core/styles packages/stencil/core/package.json dist/elementor/templarios-ecommerce/web-components

# templarios-institucional
# create directories
npx shx mkdir dist/elementor/templarios-institucional/utils
npx shx mkdir dist/elementor/templarios-institucional/web-components
npx shx mkdir dist/elementor/templarios-institucional/widgets
npx shx mkdir dist/elementor/templarios-institucional/widgets/core
npx shx mkdir dist/elementor/templarios-institucional/widgets/institucional

# move
npx shx cp -r packages/elementor/index.php dist/elementor/templarios-institucional
npx shx cp -r packages/elementor/utils/* dist/elementor/templarios-institucional/utils
npx shx cp -r packages/elementor/widgets/core/* dist/elementor/templarios-institucional/widgets/core
npx shx cp -r packages/elementor/widgets/institucional/* dist/elementor/templarios-institucional/widgets/institucional
npx shx cp -r packages/stencil/core/dist packages/stencil/core/loader packages/stencil/core/assets packages/stencil/core/styles packages/stencil/core/package.json dist/elementor/templarios-institucional/web-components


# templarios-website
# create directories
npx shx mkdir dist/elementor/templarios-website/utils
npx shx mkdir dist/elementor/templarios-website/web-components
npx shx mkdir dist/elementor/templarios-website/widgets
npx shx mkdir dist/elementor/templarios-website/widgets/core
npx shx mkdir dist/elementor/templarios-website/widgets/website

# move
npx shx cp -r packages/elementor/index.php dist/elementor/templarios-website
npx shx cp -r packages/elementor/utils/* dist/elementor/templarios-website/utils
npx shx cp -r packages/elementor/widgets/core/* dist/elementor/templarios-website/widgets/core
npx shx cp -r packages/elementor/widgets/website/* dist/elementor/templarios-website/widgets/website
npx shx cp -r packages/stencil/core/dist packages/stencil/core/loader packages/stencil/core/assets packages/stencil/core/styles packages/stencil/core/package.json dist/elementor/templarios-website/web-components

echo -e "!!! TEMPLARIOS: elementor Done!!!"