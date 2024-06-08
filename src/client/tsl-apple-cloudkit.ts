/// <reference path="../tsl-apple-cloudkit.d.ts" />

declare const define: Function;

define(
    'tsl-apple-cloudkit',
    ["require", "exports"],
    function ( require: Function, exports: Record<string, unknown> )
    {
        Object.defineProperty( exports, "__esModule", { value: true } );
        exports.default = window.CloudKit;
    }
);
