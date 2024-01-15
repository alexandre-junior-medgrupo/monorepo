#!/usr/bin/env bash

set -e

npx shx rm -rf dist/websites
npx shx mkdir dist/websites

# websites
npx shx mkdir dist/websites/documentation
npx shx mkdir dist/websites/processos
npx shx mkdir dist/websites/stoybook-7
npx shx mkdir dist/websites/stoybook-6

# documentation
npx shx mkdir dist/websites/documentation/build
npx shx cp -r packages/websites/documentation/build/* dist/websites/documentation

# processos
npx shx mkdir dist/websites/processos/build
npx shx cp -r packages/websites/processos/build/* dist/websites/processos

echo -e "!!! TEMPLARIOS: elementor Done!!!"