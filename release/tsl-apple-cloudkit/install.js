"use strict";
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  Apple CloudKit TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
Object.defineProperty(exports, "__esModule", { value: true });
var FS = require("fs");
var Https = require("https");
function saveCallback(response) {
    var dataBuffer = new Array();
    response.on('data', function (data) {
        dataBuffer.push(data);
    });
    response.on('end', function () {
        if (response.statusCode
            && response.statusCode < 400) {
            FS.writeFileSync('index.js', Buffer.concat(dataBuffer), { encoding: 'binary' });
        }
    });
    response.on('error', function (error) {
        console.error('HTTPS Error', error);
        process.exit(1);
    });
    response.setTimeout(30000, function () {
        response.destroy(new Error('HTTPS Timeout'));
    });
}
var options = {
    accept: '*/*',
    encoding: null,
    host: 'cdn.apple-cloudkit.com',
    method: 'GET',
    path: '/ck/2/cloudkit.js',
    port: 443
};
var request = Https.request(options, saveCallback);
request.on('error', function (error) {
    if (error) {
        console.error('HTTPS Error', error);
        process.exit(1);
    }
});
request.end();
