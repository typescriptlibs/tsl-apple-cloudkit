/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  Apple CloudKit TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

import * as FS from 'fs';
import * as Http from 'http';
import * as Https from 'https';
import * as Path from 'path';

function saveCallback ( response: Http.IncomingMessage )
{
    let dataBuffer: Array<Buffer> = new Array<Buffer>();

    response.on( 'data',
        function ( data: Buffer )
        {
            dataBuffer.push( data );
        }
    );

    response.on( 'end',
        function ()
        {
            if ( response.statusCode
                && response.statusCode < 400 )
            {
                FS.writeFileSync(
                    Path.join( __dirname, 'index.js' ),
                    Buffer.concat( dataBuffer ),
                    { encoding: 'binary' }
                );
            }
        }
    );

    response.on( 'error',
        function ( error: Error )
        {
            console.error( 'HTTPS Error', error );
            process.exit( 1 );
        }
    );

    response.setTimeout( 30000,
        function ()
        {
            response.destroy( new Error( 'HTTPS Timeout' ) );
        }
    );

}

let options = {
    accept: '*/*',
    encoding: <any>null,
    host: 'cdn.apple-cloudkit.com',
    method: 'GET',
    path: '/ck/2/cloudkit.js',
    port: 443
}

let request = Https.request( options, saveCallback );

request.on( 'error', function ( error )
{
    if ( error )
    {
        console.error( 'HTTPS Error', error );
        process.exit( 1 );
    }
} );

request.end();
