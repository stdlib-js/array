/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import filled2dBy = require( './../../../../base/symmetric-banded/filled2d-by' );
import toCompact = require( './../../../../base/symmetric-banded/to-compact' );

/**
* Interface describing the `symmetric-banded` namespace.
*/
interface Namespace {
	/**
	* Returns a filled two-dimensional symmetric banded nested array according to a provided callback function.
	*
	* @param N - number of rows and columns
	* @param k - number of super-/sub-diagonals
	* @param fill - fill value for values outside the band
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output array
	*
	* @example
	* function clbk( indices ) {
	*     return indices[ 0 ] + indices[ 1 ];
	* }
	*
	* var out = ns.filled2dBy( 3, 1, 0, clbk );
	* // returns [ [ 0, 1, 0 ], [ 1, 2, 3 ], [ 0, 3, 4 ] ]
	*/
	filled2dBy: typeof filled2dBy;

	/**
	* Converts a two-dimensional symmetric banded nested array to compact banded storage.
	*
	* @param uplo - specifies whether to reference the upper or lower triangular part of the input array
	* @param arr - input two-dimensional array
	* @param k - number of super-/sub-diagonals
	* @param colexicographic - specifies whether to store diagonals in colexicographic access order
	* @returns output array
	*
	* @example
	* var M = [
	*     [ 11, 2, 0 ],
	*     [ 2, 12, 4 ],
	*     [ 0, 4, 13 ]
	* ];
	*
	* var out = ns.toCompact( 'upper', M, 1, false );
	* // returns [ [ 0, 2, 4 ], [ 11, 12, 13 ] ]
	*
	* @example
	* var M = [
	*     [ 11, 2, 0 ],
	*     [ 2, 12, 4 ],
	*     [ 0, 4, 13 ]
	* ];
	*
	* var out = ns.toCompact( 'lower', M, 1, false );
	* // returns [ [ 11, 12, 13 ], [ 2, 4, 0 ] ]
	*
	* @example
	* var M = [
	*     [ 11, 2, 0 ],
	*     [ 2, 12, 4 ],
	*     [ 0, 4, 13 ]
	* ];
	*
	* var out = ns.toCompact( 'upper', M, 1, true );
	* // returns [ [ 11, 2 ], [ 12, 4 ], [ 13, 0 ] ]
	*
	* @example
	* var M = [
	*     [ 11, 2, 0 ],
	*     [ 2, 12, 4 ],
	*     [ 0, 4, 13 ]
	* ];
	*
	* var out = ns.toCompact( 'lower', M, 1, true );
	* // returns [ [ 0, 11 ], [ 2, 12 ], [ 4, 13 ] ]
	*/
	toCompact: typeof toCompact;
}

/**
* Symmetric banded array utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
