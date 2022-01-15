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

npx tsl-typedoc \
--out "docs/api" \
"sources/tsl-apple-cloudkit.d.ts" \
&& \
open "docs/api/index.html"
