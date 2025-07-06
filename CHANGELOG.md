Changelog
=========



v0.2.34
-------

* Rename `ContainerConfigServerKeyAuthObject.keyId` to `keyID` by @MartinJrP in https://github.com/typescriptlibs/tsl-apple-cloudkit/pull/33

* Updated examples by @sophiebremer in https://github.com/typescriptlibs/tsl-apple-cloudkit/pull/34

* Updated dependencies

* Deprecated support of Node.js v16

**Full Changelog**: https://github.com/typescriptlibs/tsl-apple-cloudkit/compare/v0.2.33...v0.2.34



v0.2.33
-------

* Cleaned up lib folder

**Full Changelog**: https://github.com/typescriptlibs/tsl-apple-cloudkit/compare/v0.2.32...v0.2.33



v0.2.32
-------

* Make client wrap compatible to simple AMD by @sophiebremer in https://github.com/typescriptlibs/tsl-apple-cloudkit/pull/26

* Fix #25; List typing in RecordField by @sophiebremer in https://github.com/typescriptlibs/tsl-apple-cloudkit/pull/27
  - Fixed `'[TYPE]_LIST'` in `RecordField.type`; replaced `'LIST'`
  - Fixed `'TIMESTAMP'` in `RecordField.type`; replaced `'DATETIME'`
  - Fixed `Array<TYPE>` in `RecordField.value`; replaced `Array<RecordField>`

**Full Changelog**: https://github.com/typescriptlibs/tsl-apple-cloudkit/compare/v0.2.31...v0.2.32
