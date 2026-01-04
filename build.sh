#!/usr/bin/env bash

###############################################################################
#                                                                             #
#  Apple CloudKit TypeScript Library                                          #
#                                                                             #
#  Copyright (c) TypeScriptLibs and Contributors                              #
#                                                                             #
#  Licensed under the MIT License; you may not use this file except in        #
#  compliance with the License. You may obtain a copy of the MIT License at   #
#  https://typescriptlibs.eu/LICENSE.txt                                      #
#                                                                             #
###############################################################################

cd "$(dirname "$0")/";

npm run clean && \
npx tsc --project "src/" && \
cp "src/tsl-apple-cloudkit.d.ts" "lib/index.d.ts" && \
mv -f "lib/client/" "client/" && \

npm pack  && \
mv -f tsl-apple-cloudkit-*.tgz "tsl-apple-cloudkit.tgz" && \
openssl sha1 "tsl-apple-cloudkit.tgz" > "tsl-apple-cloudkit.sha1" && \
cat "tsl-apple-cloudkit.sha1"
