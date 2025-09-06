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
* Converts a two-dimensional symmetric banded nested array to compact banded storage.
*
* @param {string} uplo - specifies whether to reference the upper or lower triangular part of the input array
* @param {Array<Array>} arr - input two-dimensional array
* @param {NonNegativeInteger} k - number of super-/sub-diagonals
* @param {boolean} colexicographic - specifies whether to store diagonals in colexicographic access order
* @returns {Array<Array>} output array
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 2, 12, 4 ],
*     [ 0, 4, 13 ]
* ];
*
* var out = toCompact( 'upper', M, 1, false );
* // returns [ [ 0, 2, 4 ], [ 11, 12, 13 ] ]
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 2, 12, 4 ],
*     [ 0, 4, 13 ]
* ];
*
* var out = toCompact( 'lower', M, 1, false );
* // returns [ [ 11, 12, 13 ], [ 2, 4, 0 ] ]
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 2, 12, 4 ],
*     [ 0, 4, 13 ]
* ];
*
* var out = toCompact( 'upper', M, 1, true );
* // returns [ [ 11, 2 ], [ 12, 4 ], [ 13, 0 ] ]
*
* @example
* var M = [
*     [ 11, 2, 0 ],
*     [ 2, 12, 4 ],
*     [ 0, 4, 13 ]
* ];
*
* var out = toCompact( 'lower', M, 1, true );
* // returns [ [ 0, 11 ], [ 2, 12 ], [ 4, 13 ] ]
*/
function toCompact( uplo, arr, k, colexicographic ) {
	var out;
	var to;
	var ta;
	var m;
	var i;
	var j;
	var o;

	m = arr.length;

	// Check whether to store diagonals along the columns...
	if ( colexicographic ) {
		out = zeros2d( [ m, k+1 ] );
		if ( uplo === 'upper' ) {
			for ( i = 0; i < m; i++ ) {
				to = out[ i ];
				ta = arr[ i ];
				for ( j = i; j < min( m, i+k+1 ); j++ ) {
					to[ j-i ] = ta[ j ];
				}
			}
			return out;
		}
		// uplo === 'lower'
		for ( i = 0; i < m; i++ ) {
			to = out[ i ];
			ta = arr[ i ];
			o = max( 0, k-i );
			for ( j = max( 0, i-k ); j <= i; j++ ) {
				to[ o ] = ta[ j ];
				o += 1;
			}
		}
		return out;
	}
	// Store diagonals along the rows...
	out = zeros2d( [ k+1, m ] );
	if ( uplo === 'upper' ) {
		for ( j = 0; j < m; j++ ) {
			o = k - j;
			for ( i = max( 0, j-k ); i <= j; i++ ) {
				out[ o+i ][ j ] = arr[ i ][ j ];
			}
		}
		return out;
	}
	// uplo === 'lower'
	for ( j = 0; j < m; j++ ) {
		o = -j;
		for ( i = j; i < min( m, j+k+1 ); i++ ) {
			out[ o+i ][ j ] = arr[ i ][ j ];
		}
	}
	return out;
}


// EXPORTS //

module.exports = toCompact;
