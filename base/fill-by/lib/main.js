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

var arraylike2object = require( './../../../base/arraylike2object' );


// FUNCTIONS //

/**
* Fills all elements within a portion of an indexed array according to a callback function.
*
* @private
* @param {Collection} x - input array
* @param {integer} start - starting index (inclusive)
* @param {integer} end - ending index (exclusive)
* @param {Function} fcn - callback function
* @param {*} thisArg - callback function execution context
* @returns {Array} output array
*
* @example
* function fcn() {
*     return 5;
* }
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = indexed( x, 1, 3, fcn, {} );
* // returns [ 1, 5, 5, 4 ]
*/
function indexed( x, start, end, fcn, thisArg ) {
	var i;
	for ( i = start; i < end; i++ ) {
		x[ i ] = fcn.call( thisArg, x[ i ], i, x );
	}
	return x;
}

/**
* Fills all elements within a portion of an accessor array according to a callback function.
*
* @private
* @param {Object} x - input array object
* @param {integer} start - starting index (inclusive)
* @param {integer} end - ending index (exclusive)
* @param {Function} fcn - callback function
* @param {*} thisArg - callback function execution context
* @returns {AccessorArray} modified input array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* function fcn() {
*     return 5;
* }
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
* var obj = arraylike2object( x );
*
* var out = accessors( obj, 1, 3, fcn, {} );
* // returns <AccessorArray>
*
* var v = x.get( 0 );
* // returns 1
*
* v = x.get( 1 );
* // returns 5
*
* v = x.get( 2 );
* // returns 5
*
* v = x.get( 3 );
* // returns 4
*/
function accessors( x, start, end, fcn, thisArg ) {
	var data;
	var get;
	var set;
	var i;

	data = x.data;
	get = x.accessors[ 0 ];
	set = x.accessors[ 1 ];
	for ( i = start; i < end; i++ ) {
		set( data, i, fcn.call( thisArg, get( data, i ), i, data ) );
	}
	return data;
}


// MAIN //

/**
* Fills all elements within a portion of an array according to a callback function.
*
* @param {Collection} x - input array
* @param {integer} start - starting index (inclusive)
* @param {integer} end - ending index (exclusive)
* @param {Function} fcn - callback function
* @param {*} [thisArg] - callback function execution context
* @returns {Collection} output array
*
* @example
* function fcn() {
*     return 5;
* }
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = fillBy( x, 1, 3, fcn );
* // returns [ 1, 5, 5, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* function fcn() {
*     return 5;
* }
*
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var out = fillBy( x, 1, 3, fcn );
* // returns <Int32Array>[ 1, 5, 5, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
function fillBy( x, start, end, fcn, thisArg ) {
	var obj;
	if ( start < 0 ) {
		start += x.length;
		if ( start < 0 ) {
			start = 0;
		}
	}
	if ( end < 0 ) {
		end += x.length; // if `end` is still negative, that is fine, as `x` will be returned un-mutated
	} else if ( end > x.length ) {
		end = x.length;
	}
	obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		return accessors( obj, start, end, fcn, thisArg );
	}
	return indexed( x, start, end, fcn, thisArg );
}


// EXPORTS //

module.exports = fillBy;
