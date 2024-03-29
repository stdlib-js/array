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

var resolveGetter = require( './../../../base/resolve-getter' );


// MAIN //

/**
* Converts a strided array to a non-strided generic array.
*
* ## Notes
*
* -   The function assumes that the input array is compatible with the specified number of elements, index stride, and index offset.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} stride - index stride
* @param {NonNegativeInteger} offset - index of the first indexed value in the input array
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var arr = strided2array( 3, x, 2, 0 );
* // returns [ 1, 3, 5 ]
*/
function strided2array( N, x, stride, offset ) {
	var out;
	var get;
	var ix;
	var i;

	// Resolve an accessor function for retrieving array elements:
	get = resolveGetter( x );

	// Copy strided elements to a dense non-strided array...
	ix = offset;
	out = [];
	for ( i = 0; i < N; i++ ) {
		out.push( get( x, ix ) );
		ix += stride;
	}
	return out;
}


// EXPORTS //

module.exports = strided2array;
