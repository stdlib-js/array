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
var isSameValue = require( '@stdlib/assert/is-same-value' );


// FUNCTIONS //

/**
* Returns the index of the last element which equals a provided search element according to the same value algorithm.
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
* var idx = internal( x, 2, 3 );
* // returns 1
*/
function internal( x, searchElement, fromIndex ) {
	var i;
	for ( i = fromIndex; i >= 0; i-- ) {
		if ( isSameValue( searchElement, x[ i ] ) ) {
			return i;
		}
	}
	return -1;
}

/**
* Returns the index of the last element which equals a provided search element according to the same value algorithm.
*
* @private
* @param {Object} x - input array object
* @param {*} searchElement - search element
* @param {NonNegativeInteger} fromIndex - starting index (inclusive)
* @returns {integer} index
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = arraylike2object( toAccessorArray( [ 1, 2, 3, 4 ] ) );
*
* var idx = accessors( x, 2, 3 );
* // returns 1
*/
function accessors( x, searchElement, fromIndex ) {
	var data;
	var get;
	var i;

	data = x.data;
	get = x.accessors[ 0 ];

	for ( i = fromIndex; i >= 0; i-- ) {
		if ( isSameValue( searchElement, get( data, i ) ) ) {
			return i;
		}
	}
	return -1;
}


// MAIN //

/**
* Returns the index of the last element which equals a provided search element according to the same value algorithm.
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
* var idx = lastIndexOfSameValue( x, 2, 3 );
* // returns 1
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var idx = lastIndexOfSameValue( x, 2, 3 );
* // returns 1
*/
function lastIndexOfSameValue( x, searchElement, fromIndex ) {
	var obj;
	if ( fromIndex < 0 ) {
		fromIndex += x.length;
		if ( fromIndex < 0 ) {
			return -1;
		}
	} else if ( fromIndex > x.length ) {
		fromIndex = x.length - 1;
	}
	obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		return accessors( obj, searchElement, fromIndex );
	}
	return internal( x, searchElement, fromIndex );
}


// EXPORTS //

module.exports = lastIndexOfSameValue;
