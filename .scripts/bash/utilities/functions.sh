#!/usr/bin/env bash

source .scripts/bash/utilities/constants.sh

# new_line
# example: new_line
function new_line {
echo -en '\n'
}

# header(text)
# example: header "Linting Formatting Rules"
function header {
echo -e "${BOLD_RED}------------------------------------------------------------${END_COLOR}"
echo -e "${BOLD_RED}!!! TEMPLÁRIOS: $1...${END_COLOR}"
}

# heading(text)
# example: heading "Running Prettier"
function heading {
echo -e "${BOLD_RED}------------------------------------------------------------${END_COLOR}"
echo -e "${BOLD_RED}!!! TEMPLÁRIOS:${END_COLOR} ${NORMAL_RED}$1...${END_COLOR}"
echo -e "${BOLD_RED}------------------------------------------------------------${END_COLOR}"
new_line
}

# body(task, runs_on, file, command)
# example: body "npm run lint" "./packages/monorepo-cli" "./packages/monorepo-cli/.scripts/lint.sh" "npx prettier . --write --cache --cache-location .prettiercache"
function body {
echo -e "${BOLD_RED}- Task:${END_COLOR} $1"
echo -e "${BOLD_RED}- Runs on:${END_COLOR} $2"
echo -e "${BOLD_RED}- Script file:${END_COLOR} $3"
echo -e "${BOLD_RED}- Command:${END_COLOR} $4"
new_line
}

# footer(text)
# example: footer "Running Prettier"
function footer {
sleep 10 & echo -e "${BOLD_RED}>>>${END_COLOR}${NORMAL_RED} $1 has ${END_COLOR}${BOLD_RED}Finished!!!${END_COLOR}"
new_line
}
