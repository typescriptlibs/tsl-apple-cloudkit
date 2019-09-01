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

cd "$(dirname "$0")/";

rm -rf \
"release/tsl-apple-cloudkit/"* \
"release/tsl-apple-cloudkit/"*.* \
"release/tsl-apple-cloudkit/".??* \

TARGET="release/tsl-apple-cloudkit/"

"./node_modules/.bin/tsc" \
--project "sources/" \

echo ".npmignore" > "${TARGET}.npmignore"
echo "index.js" >> "${TARGET}.npmignore"

cp "LICENSE" "${TARGET}LICENSE.txt"
cp "publish.json" "${TARGET}package.json"
cp "README.md" "${TARGET}README.txt"
cp "sources/tsl-apple-cloudkit.d.ts" "${TARGET}index.d.ts"

cd "release"
tar -czf "tsl-apple-cloudkit.tgz" "tsl-apple-cloudkit"
openssl sha1 "tsl-apple-cloudkit.tgz" > "tsl-apple-cloudkit.sha1"
cat "tsl-apple-cloudkit.sha1"
cd ..
