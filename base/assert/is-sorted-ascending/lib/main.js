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

var isAccessorArray = require( './../../../../base/assert/is-accessor-array' );
var accessorGetter = require( './../../../../base/accessor-getter' );
var getter = require( './../../../../base/getter' );
var dtype = require( './../../../../dtype' );


// MAIN //

/**
* Tests if an array is sorted in ascending order.
*
* @param {Collection} x - input array
* @returns {boolean} boolean indicating if an array is sorted in ascending order
*
* @example
* var out = isSortedAscending( [ 1, 2, 3 ] );
* // returns true
*
* @example
* var out = isSortedAscending( [ 3, 2, 1 ] );
* // returns false
*
* @example
* var out = isSortedAscending( [ 3, 3, 3 ] );
* // returns true
*
* @example
* var out = isSortedAscending( [ 3 ] );
* // returns true
*
* @example
* var out = isSortedAscending( [] );
* // returns false
*
* @example
* var out = isSortedAscending( [ 1, 3, 2 ] );
* // returns false
*/
function isSortedAscending( x ) {
	var len;
	var get;
	var dt;
	var v1;
	var v2;
	var i;

	// Resolve the input array data type:
	dt = dtype( x );

	// Resolve an accessor for retrieving input array elements:
	if ( isAccessorArray( x ) ) {
		get = accessorGetter( dt );
	} else {
		get = getter( dt );
	}
	// Get the number of elements over which to iterate:
	len = x.length;

	// Check for an empty array:
	if ( len === 0 ) {
		return false;
	}
	// Loop over the elements...
	v1 = get( x, 0 );
	for ( i = 1; i < len; i++ ) {
		v2 = get( x, i );
		if ( v1 > v2 ) {
			return false;
		}
		v1 = v2;
	}
	return true;
}


// EXPORTS //

module.exports = isSortedAscending;
