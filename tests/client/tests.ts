/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  Apple CloudKit TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

import testsconfig from 'testsconfig';
import * as CloudKit from 'tsl-apple-cloudkit';

console.debug( 'CloudKit JS', CloudKit );
// bug: console.debug( 'CloudKit.AppleIDButtonTheme', CloudKit.AppleIDButtonTheme );
console.debug( 'CloudKit.BUILD_VERSION', CloudKit.BUILD_VERSION );
console.debug( 'CloudKit.CKError', CloudKit.CKError );
console.debug( 'CloudKit.CLOUDKIT_LOADED', CloudKit.CLOUDKIT_LOADED );
console.debug( 'CloudKit.DatabaseScope', CloudKit.DatabaseScope );
console.debug( 'CloudKit.DEVELOPMENT_ENVIRONMENT', CloudKit.DEVELOPMENT_ENVIRONMENT );
console.debug( 'CloudKit.QueryFilterComparator', CloudKit.QueryFilterComparator );
console.debug( 'CloudKit.PRODUCTION_ENVIRONMENT', CloudKit.PRODUCTION_ENVIRONMENT );
console.debug( 'CloudKit.Promise', ( <any>CloudKit ).Promise );
console.debug( 'CloudKit.ReferenceAction', CloudKit.ReferenceAction );
console.debug( 'CloudKit.ShareParticipantAcceptanceStatus', CloudKit.ShareParticipantAcceptanceStatus );
console.debug( 'CloudKit.ShareParticipantPermission', CloudKit.ShareParticipantPermission );
console.debug( 'CloudKit.ShareParticipantType', CloudKit.ShareParticipantType );
console.debug( 'CloudKit.ShareRecordType', CloudKit.ShareRecordType );
console.debug( 'CloudKit.SubscriptionType', CloudKit.SubscriptionType );
console.debug( 'CloudKit.VERSION', CloudKit.VERSION );
console.debug( 'CloudKit.WS_API_VERSION', CloudKit.WS_API_VERSION );
var r: CloudKit.Record = {};

var cloudKitConfig: CloudKit.CloudKitConfig = { 'containers': [testsconfig] } as CloudKit.CloudKitConfig;

var configuredCloudKit = CloudKit.configure( cloudKitConfig );
console.debug( 'CloudKit', configuredCloudKit );
// bug: console.debug( 'CloudKit.AppleIDButtonTheme', ( <any>configuredCloudKit ).AppleIDButtonTheme );

console.debug( 'CloudKit.getAllContainers', configuredCloudKit.getAllContainers() );

var defaultContainer = configuredCloudKit.getDefaultContainer();
console.debug( 'CloudKit.getDefaultContainer', defaultContainer );

console.debug( 'Container.getConfig', defaultContainer.getConfig() );
