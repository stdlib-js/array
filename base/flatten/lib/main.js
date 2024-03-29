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

var numel = require( '@stdlib/ndarray/base/numel' );
var zeros = require( './../../../base/zeros' );
var assign = require( './assign.js' );


// MAIN //

/**
* Flattens an n-dimensional nested array.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
*
* @param {Array} x - input nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {boolean} colexicographic - specifies whether to flatten array values in colexicographic order
* @returns {Array} flattened array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten( x, [ 2, 2 ], false );
* // returns [ 1, 2, 3, 4 ]
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten( x, [ 2, 2 ], true );
* // returns [ 1, 3, 2, 4 ]
*/
function flatten( x, shape, colexicographic ) {
	var out = zeros( numel( shape ) );
	return assign( x, shape, colexicographic, out, 1, 0 );
}


// EXPORTS //

module.exports = flatten;
