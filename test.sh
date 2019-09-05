#!/usr/bin/env sh

###############################################################################
#                                                                             #
#  Apple CloudKit TypeScript Library                                          #
#                                                                             #
#  Copyright (c) TypeScriptLibs and Contributors                              #
#                                                                             #
#  Licensed under the MIT License; you may not use this file except in        #
#  compliance with the License. You may obtain a copy of the MIT License at   #
#  https://typescriptlibs.org/LICENSE.txt                                     #
#                                                                             #
###############################################################################

cd "$(dirname "$0")/"
BASE="$(pwd)"

TARGET="release/tests/"

npx tsc --project "tests/server/"

mkdir -p "${TARGET}node_modules/"
cp -R "release/tsl-apple-cloudkit" "${TARGET}node_modules/"
cd "${TARGET}node_modules/tsl-apple-cloudkit/"
node "install.js"
cd "${BASE}"
curl -s https://cdn.apple-cloudkit.com/ck/2/cloudkit.js > "${TARGET}node_modules/tsl-apple-cloudkit/index2.js"
openssl sha1 "${TARGET}node_modules/tsl-apple-cloudkit/index.js"
openssl sha1 "${TARGET}node_modules/tsl-apple-cloudkit/index2.js"
node "${TARGET}server/tests.js"

#npx tsc \
#--project "tests/client/"

#cp "tests/client/tests.html" "${TARGET}client/tests.html"

#open "release/tests/client/tests.html"
