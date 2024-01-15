#!/usr/bin/env bash

source .scripts/utilities/constants.sh
source .scripts/utilities/functions.sh

function lint {
  local TEXT="Running Prettier"
  local TASK="npm run lint"
  local RUNS_ON="./packages/monorepo-cli"
  local FILE="./packages/monorepo-cli/.scripts/lint.sh"
  local COMMAND="npx prettier . --write --cache --cache-location .prettiercache"

  heading "${TEXT}"

  body "${TASK}" "${RUNS_ON}" "${FILE}" "${COMMAND}"

  # runs command
  npx prettier . --write --cache --cache-location .prettiercache

  new_line

  footer "${TEXT}"
}

header "Linting Formatting Rules"
lint
