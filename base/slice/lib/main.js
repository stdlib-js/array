/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var arraylike2object = require( './../../../base/arraylike2object' );


// VARIABLES //

var arraySlice = Array.prototype.slice;


// FUNCTIONS //

/**
* Tests whether an object has a specified method.
*
* @private
* @param {Object} obj - input object
* @param {string} method - method name
* @returns {boolean} boolean indicating whether an object has a specified method
*
* @example
* var bool = hasMethod( [], 'slice' );
* // returns true
*
* @example
* var bool = hasMethod( [], 'beep' );
* // returns false
*/
function hasMethod( obj, method ) {
	return ( typeof obj[ method ] === 'function' );
}

/**
* Returns a shallow copy of a portion of an array using the `Array#slice` built-in.
*
* @private
* @param {Collection} x - input array
* @param {integer} start - starting index (inclusive)
* @param {integer} end - ending index (exclusive)
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = builtin( x, 1, 3 );
* // returns [ 2, 3 ]
*/
function builtin( x, start, end ) {
	return arraySlice.call( x, start, end );
}

/**
* Returns a shallow copy of a portion of an accessor array.
*
* @private
* @param {Object} x - input array object
* @param {integer} start - starting index (inclusive)
* @param {integer} end - ending index (exclusive)
* @returns {Array} output array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = arraylike2object( toAccessorArray( [ 1, 2, 3, 4 ] ) );
*
* var out = accessors( x, 1, 3 );
* // returns [ 2, 3 ]
*/
function accessors( x, start, end ) {
	var data;
	var get;
	var out;
	var i;

	data = x.data;
	get = x.accessors[ 0 ];
	out = [];
	for ( i = start; i < end; i++ ) {
		out.push( get( data, i ) );
	}
	return out;
}


// MAIN //

/**
* Returns a shallow copy of a portion of an array.
*
* @param {Collection} x - input array
* @param {integer} start - starting index (inclusive)
* @param {integer} end - ending index (exclusive)
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = slice( x, 1, 3 );
* // returns [ 2, 3 ]
*
* var bool = ( out === x );
* // returns false
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var out = slice( x, 1, 3 );
* // returns <Int32Array>[ 2, 3 ]
*
* var bool = ( out === x );
* // returns false
*/
function slice( x, start, end ) {
	var obj;
	if ( hasMethod( x, 'slice' ) ) {
		return x.slice( start, end );
	}
	obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		return accessors( obj, start, end );
	}
	// Assume we can use the built-in `Array#slice` method to copy elements to a generic array:
	return builtin( x, start, end );
}


// EXPORTS //

module.exports = slice;
