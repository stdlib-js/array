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

var max = require( '@stdlib/math/base/special/fast/max' );
var min = require( '@stdlib/math/base/special/fast/min' );
var zeros2d = require( './../../../../base/zeros2d' );


// MAIN //

/**
* Converts a two-dimensional banded nested array to compact banded storage.
*
* @param {Array<Array>} arr - input two-dimensional array
* @param {NonNegativeInteger} ku - number of super-diagonals
* @param {NonNegativeInteger} kl - number of sub-diagonals
* @param {boolean} colexicographic - specifies whether to store diagonals in colexicographic access order
* @returns {Array<Array>} output array
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 3, 12, 4 ],
*     [ 0, 5, 13 ]
* ];
*
* var out = toCompact( M, 1, 1, false );
* // returns [ [ 0, 2, 4 ], [ 11, 12, 13 ], [ 3, 5, 0 ] ]
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 3, 12, 4 ],
*     [ 0, 5, 13 ]
* ];
*
* var out = toCompact( M, 1, 1, true );
* // returns [ [ 0, 11, 3 ], [ 2, 12, 5 ], [ 4, 13, 0 ] ]
*/
function toCompact( arr, ku, kl, colexicographic ) {
	var out;
	var to;
	var M;
	var N;
	var i;
	var j;
	var k;

	M = arr.length;
	N = arr[ 0 ].length;

	// Check whether to store diagonals along the columns...
	if ( colexicographic ) {
		out = zeros2d( [ N, ku+kl+1 ] );
		for ( j = 0; j < N; j++ ) {
			to = out[ j ];
			k = ku - j;
			for ( i = max( 0, j-ku ); i < min( M, j+kl+1 ); i++ ) {
				to[ k+i ] = arr[ i ][ j ];
			}
		}
		return out;
	}
	// Store diagonals along the rows...
	out = zeros2d( [ ku+kl+1, N ] );
	for ( j = 0; j < N; j++ ) {
		k = ku - j;
		for ( i = max( 0, j-ku ); i < min( M, j+kl+1 ); i++ ) {
			out[ k+i ][ j ] = arr[ i ][ j ];
		}
	}
	return out;
}


// EXPORTS //

module.exports = toCompact;
