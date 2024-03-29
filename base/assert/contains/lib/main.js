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

var isAccessorArray = require( './../../../../base/assert/is-accessor-array' );
var accessorGetter = require( './../../../../base/accessor-getter' );
var getter = require( './../../../../base/getter' );
var dtype = require( './../../../../dtype' );


// MAIN //

/**
* Tests if an array contains a provided search value.
*
* @param {Collection} x - input array
* @param {*} value - search value
* @returns {boolean} boolean indicating if an array contains a search value
*
* @example
* var out = contains( [ 1, 2, 3 ], 2 );
* // returns true
*/
function contains( x, value ) {
	var len;
	var get;
	var dt;
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

	// Loop over the elements...
	for ( i = 0; i < len; i++ ) {
		if ( get( x, i ) === value ) {
			return true;
		}
	}
	return false;
}


// EXPORTS //

module.exports = contains;
