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
var CloudKit = require("tsl-apple-cloudkit");
function default_1() {
    var testCounter = 0;
    try {
        ++testCounter;
        assert.strictEqual(typeof CloudKit.CKError, 'function');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.Promise, 'function');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.BUILD_VERSION, 'string');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.CLOUDKIT_LOADED, 'string');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.DEVELOPMENT_ENVIRONMENT, 'string');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.PRODUCTION_ENVIRONMENT, 'string');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.VERSION, 'string');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.WS_API_VERSION, 'number');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.DatabaseScope, 'object');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.QueryFilterComparator, 'object');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.ReferenceAction, 'object');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.ShareParticipantAcceptanceStatus, 'object');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.ShareParticipantPermission, 'object');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.ShareParticipantType, 'object');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.ShareRecordType, 'object');
        ++testCounter;
        assert.strictEqual(typeof CloudKit.SubscriptionType, 'object');
        return true;
    }
    catch (error) {
        console.error('CloudKit.test #' + testCounter + ' failed (' + error + ')');
        return false;
    }
}
exports.default = default_1;
