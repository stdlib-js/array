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
* Tests whether an object has a specified method.
*
* @private
* @param {Object} obj - input object
* @param {string} method - method name
* @returns {boolean} boolean indicating whether an object has a specified method
*
* @example
* var bool = hasMethod( [], 'fill' );
* // e.g., returns true
*
* @example
* var bool = hasMethod( [], 'beep' );
* // returns false
*/
function hasMethod( obj, method ) {
	return ( typeof obj[ method ] === 'function' );
}

/**
* Fills all elements within a portion of an indexed array with a specified value.
*
* @private
* @param {Collection} x - input array
* @param {*} value - fill value
* @param {integer} start - starting index (inclusive)
* @param {integer} end - ending index (exclusive)
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = indexed( x, 5, 1, 3 );
* // returns [ 1, 5, 5, 4 ]
*/
function indexed( x, value, start, end ) {
	var i;
	for ( i = start; i < end; i++ ) {
		x[ i ] = value;
	}
	return x;
}

/**
* Fills all elements within a portion of an accessor array with a specified value.
*
* @private
* @param {Object} x - input array object
* @param {*} value - fill value
* @param {integer} start - starting index (inclusive)
* @param {integer} end - ending index (exclusive)
* @returns {AccessorArray} modified input array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
* var obj = arraylike2object( x );
*
* var out = accessors( obj, 5, 1, 3 );
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
function accessors( x, value, start, end ) {
	var data;
	var set;
	var i;

	data = x.data;
	set = x.accessors[ 1 ];
	for ( i = start; i < end; i++ ) {
		set( data, i, value );
	}
	return data;
}


// MAIN //

/**
* Fills all elements within a portion of an array with a specified value.
*
* @param {Collection} x - input array
* @param {*} value - fill value
* @param {integer} start - starting index (inclusive)
* @param {integer} end - ending index (exclusive)
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = fill( x, 5, 1, 3 );
* // returns [ 1, 5, 5, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var out = fill( x, 5, 1, 3 );
* // returns <Int32Array>[ 1, 5, 5, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
function fill( x, value, start, end ) {
	var obj;
	if ( hasMethod( x, 'fill' ) ) {
		return x.fill( value, start, end );
	}
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
		return accessors( obj, value, start, end );
	}
	return indexed( x, value, start, end );
}


// EXPORTS //

module.exports = fill;
