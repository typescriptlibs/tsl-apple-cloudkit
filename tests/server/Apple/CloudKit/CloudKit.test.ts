/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  Apple CloudKit TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

import * as assert from 'assert';
import * as CloudKit from 'tsl-apple-cloudkit';

export default function (): boolean
{
	let testCounter = 0;

	try
	{
		// Classes
		++testCounter;
		assert.strictEqual( typeof CloudKit.CKError, 'function' );
		++testCounter;
		assert.strictEqual( typeof ( <any>CloudKit ).Promise, 'function' );

		// Constants
		++testCounter;
		assert.strictEqual( typeof CloudKit.BUILD_VERSION, 'string' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.CLOUDKIT_LOADED, 'string' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.DEVELOPMENT_ENVIRONMENT, 'string' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.PRODUCTION_ENVIRONMENT, 'string' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.VERSION, 'string' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.WS_API_VERSION, 'number' );

		// Enums
		++testCounter;
		assert.strictEqual( typeof CloudKit.DatabaseScope, 'object' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.QueryFilterComparator, 'object' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.ReferenceAction, 'object' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.ShareParticipantAcceptanceStatus, 'object' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.ShareParticipantPermission, 'object' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.ShareParticipantType, 'object' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.ShareRecordType, 'object' );
		++testCounter;
		assert.strictEqual( typeof CloudKit.SubscriptionType, 'object' );

		return true;
	}
	catch ( error )
	{
		console.error( 'CloudKit.test #' + testCounter + ' failed (' + error + ')' );
		return false;
	}
}
