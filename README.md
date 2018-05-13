tsl-apple-cloudkit v0.2.14
==========================
CloudKit JS v2 type declarations for TypeScript v2

Changes
-------
Please note, that starting with v0.2.7 some elements break with the
documentation by Apple. The following changes have been made:
- Container.registerForNotifications actually returns a Promise
- use ContainerConfigLike, ClientContainerConfig, and ServerContainerConfig
  instead of ContainerConfig
- use FilterLike, RecordFieldFilter, and SystemFieldFilter
  instead of Filter
- use RecordLike, RecordReceived, RecordToChange, and RecordToCreate
  instead of Record
- Share extends RecordReceived
- use SortDescriptorLike, RecordFieldSortDescriptor, and
  SystemFieldSortDescriptor instead of SortDescriptor

Requirements
------------
This package is compatible to
- CloudKit JS 2.0 and later
- Node.js 6.8 and later (server)
- RequireJS 2.0 and later (client)
- TypeScript 2.0 and later (development)

Installation & Update
---------------------
```
npm i https://typescriptlibs.org/npm/tsl-apple-cloudkit.tgz
```

Configuration
-------------
On client side you have to configure RequireJS to find the client handler, that
has to be moved outside the node.js package:
```
require.config({
    paths: {
        'tsl-apple-cloudkit': 'libs/tsl-apple-cloudkit',
    }
});
```

Please note, that the handler requires a static reference to CloudKit JS in the
HTML head like this:
```
<script src="https://cdn.apple-cloudkit.com/ck/2/cloudkit.js" />
```

Usage
-----
import * as CloudKit from 'tsl-apple-cloudkit';

Documentation
-------------
Further information can be found at
https://developer.apple.com/reference/cloudkitjs
https://developer.apple.com/videos/play/wwdc2015/710/
https://developer.apple.com/icloud/

Legal Notes
-----------
The downloaded main.js is licensed only for use to Apple developers in
providing CloudKit Web Services, or any part thereof, and is subject to the
iCloud Terms and Conditions and the Apple Developer Program License Agreement.
You may not port this file to another platform inconsistent with the iCloud
Terms and Conditions, the Apple Developer Program License Agreement, or the
accompanying Documentation without Apple's written consent.

Acknowledgements
----------------
https://cdn.apple-cloudkit.com/ck/2/acknowledgements.txt
