---
title: Apple
---



## [CloudKit v0.2.14](tsl-apple-cloudkit/)
CloudKit JS v2 type declarations for TypeScript v2



### Changes
Please note, that starting with v0.2.7 some elements break with the
documentation by Apple. The following changes have been made:
- Container.registerForNotifications actually returns a Promise
- use ContainerConfigLike, ClientContainerConfig, and ServerContainerConfig
  instead of ContainerConfig
- use FilterLike, RecordFieldFilter, and SystemFieldFilter instead of Filter
- use RecordLike, RecordReceived, RecordToChange, and RecordToCreate instead of
  Record
- Share extends RecordReceived
- use SortDescriptorLike, RecordFieldSortDescriptor, and
  SystemFieldSortDescriptor instead of SortDescriptor



### Requirements
This package is compatible to
- CloudKit JS 2.0 and later
- Node.js 6.8 and later (server)
- RequireJS 2.0 and later (client)
- TypeScript 2.0 and later (development)



### Installation & Update
```Shell
npm i https://typescriptlibs.org/npm/tsl-apple-cloudkit.tgz
```



### Configuration:
On client side you have to configure RequireJS to find the client handler, that
has to be moved outside the node.js package:
```JavaScript
require.config({
	paths: {
		'tsl-apple-cloudkit': 'libs/tsl-apple-cloudkit',
	}
});
```
Please note, that the handler requires a static script reference to CloudKit JS
in the HTML head like this:
```HTML
<script src="https://cdn.apple-cloudkit.com/ck/2/cloudkit.js" />
```



### Usage
```TypeScript
import * as CloudKit from 'tsl-apple-cloudkit';
```



### Documentation
Further information can be found at the
[Apple CloudKit JS Reference](https://developer.apple.com/reference/cloudkitjs),
[Apple CloudKit JS Video](https://developer.apple.com/videos/play/wwdc2015/710/),
and [Apple iCloud Development](https://developer.apple.com/icloud/).



### Legal Notes
The downloaded main.js is licensed only for use to Apple developers in providing CloudKit Web Services, or any part thereof, and is subject to the iCloud Terms and Conditions and the Apple Developer Program License Agreement. You may not port this file to another platform inconsistent with the iCloud Terms and Conditions, the Apple Developer Program License Agreement, or the accompanying Documentation without Apple's written consent. Acknowledgements:
[acknowledgements.txt](https://cdn.apple-cloudkit.com/ck/2/acknowledgements.txt)



### Packages

- [tsl-apple-cloudkit.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit.tgz)
  [9515ae0d207f5f29d74ffc75db01807740513d6e](https://typescriptlibs.org/npm/tsl-apple-cloudkit.sha1)
- [v0.2.14.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.14.tgz)
  [9515ae0d207f5f29d74ffc75db01807740513d6e](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.14.sha1)
- [v0.2.13.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.13.tgz)
  [9821eb3119b94f89f1b9e0070c225fe5e96e7494](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.13.sha1)
- [v0.2.12.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.12.tgz)
  [8e89680c4d471bf3931df4336a824e0fcef89809](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.12.sha1)
- [v0.2.11.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.11.tgz)
  [2b26cd3ee404b545a51e9440a2a2e152fca15a59](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.11.sha1)
- [v0.2.10.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.10.tgz)
  [d50d78ff4d99f0e0c1a81b044b82910eb1d1d0dc](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.10.sha1)
- [v0.2.9.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.9.tgz)
  [ffd731ce0d534f16cc8a8baf243f4914c09afec5](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.9.sha1)
- [v0.2.8.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.8.tgz)
  [aabdb2fabd78551597a4336f99188a1bef0f0616](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.8.sha1)
- [v0.2.7.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.7.tgz)
  [b9c0892a329e2ee2ee69969f3e2a9ec90ca834cf](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.7.sha1)
- [v0.2.6.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.6.tgz)
  [9da18a23985430afb14137207f0e9590b4b21061](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.6.sha1)
- [v0.2.5.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.5.tgz)
  [6e9c160b219143cde0f468576ac0d9ea63e357ab](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.5.sha1)
- [v0.2.4.tgz](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.4.tgz)
  [c52589f5b6cc0af0c0e672c158d77291512ae642](https://typescriptlibs.org/npm/tsl-apple-cloudkit/v0.2.4.sha1)
