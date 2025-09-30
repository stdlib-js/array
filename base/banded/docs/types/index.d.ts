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

import filled2dBy = require( './../../../../base/banded/filled2d-by' );
import toCompact = require( './../../../../base/banded/to-compact' );

/**
* Interface describing the `banded` namespace.
*/
interface Namespace {
	/**
	* Returns a filled two-dimensional banded nested array according to a provided callback function.
	*
	* @param shape - array shape
	* @param ku - number of super-diagonals
	* @param kl - number of sub-diagonals
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
	* var out = ns.filled2dBy( [ 3, 3 ], 1, 1, 0, clbk );
	* // returns [ [ 0, 1, 0 ], [ 1, 2, 3 ], [ 0, 3, 4 ] ]
	*/
	filled2dBy: typeof filled2dBy;

	/**
	* Converts a two-dimensional banded nested array to compact banded storage.
	*
	* @param arr - input two-dimensional array
	* @param ku - number of super-diagonals
	* @param kl - number of sub-diagonals
	* @param colexicographic - specifies whether to store diagonals in colexicographic access order
	* @returns output array
	*
	* @example
	* var M = [
	*     [ 11, 2, 0 ],
	*     [ 3, 12, 4 ],
	*     [ 0, 5, 13 ]
	* ];
	*
	* var out = ns.toCompact( M, 1, 1, false );
	* // returns [ [ 0, 2, 4 ], [ 11, 12, 13 ], [ 3, 5, 0 ] ]
	*
	* @example
	* var M = [
	*     [ 11, 2, 0 ],
	*     [ 3, 12, 4 ],
	*     [ 0, 5, 13 ]
	* ];
	*
	* var out = ns.toCompact( M, 1, 1, true );
	* // returns [ [ 0, 11, 3 ], [ 2, 12, 5 ], [ 4, 13, 0 ] ]
	*/
	toCompact: typeof toCompact;
}

/**
* Banded array utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
