#!/usr/bin/env sh

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

echo "Integrity hashs for $1";

echo "\nsha256-";
cat "$1" | \
openssl dgst -sha256 -binary | \
openssl base64 -A

echo "\nsha384-";
cat "$1" | \
openssl dgst -sha384 -binary | \
openssl base64 -A

echo "\nsha512-";
cat "$1" | \
openssl dgst -sha512 -binary | \
openssl base64 -A

echo "\n";
