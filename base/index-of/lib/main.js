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

var isAccessorArray = require( '@stdlib/assert/is-accessor-array' );
var resolveGetter = require( './../../../base/resolve-getter' );


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
* var bool = hasMethod( [], 'indexOf' );
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
* Returns the index of the first element which equals a provided search element.
*
* @private
* @param {Collection} x - input array
* @param {*} searchElement - search element
* @param {NonNegativeInteger} fromIndex - starting index (inclusive)
* @returns {integer} index
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var idx = internal( x, 2, 0 );
* // returns 1
*/
function internal( x, searchElement, fromIndex ) {
	var i;
	for ( i = fromIndex; i < x.length; i++ ) {
		if ( searchElement === x[ i ] ) {
			return i;
		}
	}
	return -1;
}

/**
* Returns the index of the first element which equals a provided search element.
*
* @private
* @param {Object} x - input array object
* @param {*} searchElement - search element
* @param {NonNegativeInteger} fromIndex - starting index (inclusive)
* @returns {integer} index
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
*
* var idx = accessors( x, 2, 0 );
* // returns 1
*/
function accessors( x, searchElement, fromIndex ) {
	var get;
	var i;

	get = resolveGetter( x );
	for ( i = fromIndex; i < x.length; i++ ) {
		if ( searchElement === get( x, i ) ) {
			return i;
		}
	}
	return -1;
}


// MAIN //

/**
* Returns the index of the first element which equals a provided search element.
*
* ## Notes
*
* -   If unable to find an element which equals a provided search element, the function returns `-1`.
*
* @param {Collection} x - input array
* @param {*} searchElement - search element
* @param {integer} fromIndex - starting index (inclusive)
* @returns {integer} index
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var idx = indexOf( x, 2, 0 );
* // returns 1
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var idx = indexOf( x, 2, 0 );
* // returns 1
*/
function indexOf( x, searchElement, fromIndex ) {
	if ( hasMethod( x, 'indexOf' ) ) {
		return x.indexOf( searchElement, fromIndex );
	}
	if ( fromIndex < 0 ) {
		fromIndex += x.length;
		if ( fromIndex < 0 ) {
			fromIndex = 0;
		}
	}
	if ( isAccessorArray( x ) ) {
		return accessors( x, searchElement, fromIndex );
	}
	return internal( x, searchElement, fromIndex );
}


// EXPORTS //

module.exports = indexOf;
