"use strict";
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  Apple CloudKit TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var CloudKit_test_1 = require("./Apple/CloudKit/CloudKit.test");
try {
    assert.ok(CloudKit_test_1.default());
    console.log('Tests successfull');
}
catch (error) {
    console.error('Tests failed (' + error + ')');
}
finally {
    process.exit();
}
