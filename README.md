Apple CloudKit TypeScript Library
=================================

TypeScript library with type declarations of Apple CloudKit JS v2. It downloads
the CloudKit JS file automatically from the Apple CDN during NPM installation.



[![npm](https://img.shields.io/npm/v/tsl-apple-cloudkit.svg)](https://www.npmjs.com/package/tsl-apple-cloudkit)
[![Node.js](https://github.com/typescriptlibs/tsl-apple-cloudkit/workflows/Node.js/badge.svg)](https://github.com/typescriptlibs/tsl-apple-cloudkit/actions/workflows/node.js.yml)
[![license](https://img.shields.io/npm/l/tsl-apple-cloudkit.svg)](https://github.com/typescriptlibs/tsl-apple-cloudkit/blob/main/LICENSE.md)
[![CodeQL Advanced](https://github.com/typescriptlibs/tsl-apple-cloudkit/workflows/CodeQL%20Advanced/badge.svg)](https://github.com/typescriptlibs/tsl-apple-cloudkit/actions/workflows/codeql.yml)



Changes
-------

Please note, that starting with v0.2.7 some elements break with the
documentation by Apple. The following changes have been made:

- Container.registerForNotifications actually returns a Promise

- Use ContainerConfigLike, ClientContainerConfig, and ServerContainerConfig
  instead of ContainerConfig

- Use FilterLike, RecordFieldFilter, and SystemFieldFilter instead of Filter

- Use RecordLike, RecordReceived, RecordToChange, and RecordToCreate instead of
  Record

- Share extends RecordReceived

- Use SortDescriptorLike, RecordFieldSortDescriptor, and
  SystemFieldSortDescriptor instead of SortDescriptor



Requirements
------------

This package is officially compatible with

- CloudKit JS 2.0 and later

- Node.js 16.0 and later (server)

- RequireJS 2.0 and later (client)

- TypeScript 3.0 and later (development)

Earlier versions might work as well, but do not receive updates anymore.



Installation & Update
---------------------

```Shell
npm i https://typescriptlibs.org/npm/tsl-apple-cloudkit.tgz
```



Configuration
-------------

On client side you can configure RequireJS to find the client handler, that has
to be moved outside the NodeJS package:

```JavaScript
require.config({
	paths: {
		'tsl-apple-cloudkit': 'lib/tsl-apple-cloudkit',
	}
});
```

Please note: If you do not create a bundle containing `tsl-apple-cloudkit`, the
handler requires a static reference to CloudKit JS in the HTML head like this:

```HTML
<script src="https://cdn.apple-cloudkit.com/ck/2/cloudkit.js"></script>
```

There are reports that CloudKit JS might not be compatible with the bundler of
Angular v13 and later.



Usage
-----

You can use the CloudKit JS library simply as a regular module:

```TypeScript
import * as CloudKit from 'tsl-apple-cloudkit';
```

Or you reference the CloudKit JS declarations directly, when you use no modules:

```TypeScript
/// <reference path="node_modules/tsl-apple-cloudkit/index.d.ts" />
```



Documentation
-------------

Further information can be found in the
[Apple CloudKit JS Documentation](https://developer.apple.com/documentation/cloudkitjs),
[Apple CloudKit JS Video](https://developer.apple.com/videos/play/wwdc2015/710/),
and [Apple iCloud Development](https://developer.apple.com/icloud/).

Use [Apple CKTool JS](https://www.npmjs.com/package/@apple/cktool.database)
and [Apple CKTool JS Reference](https://developer.apple.com/documentation/cktooljs)
to manage CloudKit containers and databases.



Legal Notes
-----------

The downloaded index.js is licensed only for use to Apple developers in
providing CloudKit Web Services, or any part thereof, and is subject to the
iCloud Terms and Conditions and the Apple Developer Program License Agreement.
You may not port this file to another platform inconsistent with the iCloud
Terms and Conditions, the Apple Developer Program License Agreement, or the
accompanying Documentation without Apple's written consent.

Acknowledgements: https://cdn.apple-cloudkit.com/ck/2/acknowledgements.txt
