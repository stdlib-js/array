/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var getter = require( './../../base/getter' );
var accessorGetter = require( './../../base/accessor-getter' );
var Uint8Array = require( './../../uint8' );
var gcopy = require( '@stdlib/blas/base/gcopy' ).ndarray;


// MAIN //

/**
* Fills an output ArrayBuffer with array values.
*
* @private
* @param {Function} Struct - struct constructor
* @param {ArrayBuffer} buf - output data buffer
* @param {Collection} arr - input array
* @throws {TypeError} an input array must contain struct instances
* @throws {TypeError} each element of an input array must be a struct instance having the expected layout
* @returns {ArrayBuffer} output data buffer
*/
function fromArray( Struct, buf, arr ) {
	var sbytes;
	var bbytes;
	var offset;
	var layout;
	var sview;
	var opts;
	var len;
	var get;
	var flg;
	var nb;
	var v;
	var i;

	opts = {
		'format': 'layout'
	};

	len = arr.length;
	if ( arr.get && arr.set ) {
		get = accessorGetter( 'default' );
	} else {
		get = getter( 'default' );
	}
	layout = Struct.layout;
	nb = Struct.byteLength;

	// FIXME: add optimization for when `buf` is a StructArray having the same layout, as can just copy bytes

	bbytes = new Uint8Array( buf );
	offset = 0;
	for ( i = 0; i < len; i++ ) {
		v = get( arr, i );
		try {
			sview = Struct.viewOf( v ); // note: this should throw if `v` is not a struct
			flg = true;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			try {
				// Attempt to convert the input value to a struct instance:
				v = new Struct( v ); // note: this should throw if `v` is not an object with valid fields
			} catch ( err ) { // eslint-disable-line no-unused-vars
				return null;
			}
			sview = Struct.viewOf( v );
			flg = false;
		}
		if ( flg && v.toString( opts ) !== layout ) {
			return null;
		}
		sbytes = new Uint8Array( sview.buffer, sview.byteOffset, sview.byteLength ); // eslint-disable-line max-len
		gcopy( nb, sbytes, 1, 0, bbytes, 1, offset );
		offset += nb;
	}
	return buf;
}


// EXPORTS //

module.exports = fromArray;
