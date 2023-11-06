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

// MAIN //

/**
* Flattens a two-dimensional nested array.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
*
* @param {Array<Collection>} x - input nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {boolean} colexicographic - specifies whether to flatten array values in colexicographic order
* @returns {Array} flattened array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten2d( x, [ 2, 2 ], false );
* // returns [ 1, 2, 3, 4 ]
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten2d( x, [ 2, 2 ], true );
* // returns [ 1, 3, 2, 4 ]
*/
function flatten2d( x, shape, colexicographic ) {
	var out;
	var S0;
	var S1;
	var i0;
	var i1;
	var a0;

	// Extract loop variables:
	S0 = shape[ 1 ]; // for nested arrays, the last dimensions have the fastest changing indices
	S1 = shape[ 0 ];

	// Initialize an output array:
	out = [];

	// Iterate over the array dimensions...
	if ( colexicographic ) {
		for ( i0 = 0; i0 < S0; i0++ ) {
			for ( i1 = 0; i1 < S1; i1++ ) {
				out.push( x[ i1 ][ i0 ] ); // equivalent to storing in column-major (Fortran-style) order
			}
		}
		return out;
	}
	for ( i1 = 0; i1 < S1; i1++ ) {
		a0 = x[ i1 ];
		for ( i0 = 0; i0 < S0; i0++ ) {
			out.push( a0[ i0 ] ); // equivalent to storing in row-major (C-style) order
		}
	}
	return out;
}


// EXPORTS //

module.exports = flatten2d;
