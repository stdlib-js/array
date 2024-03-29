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

var flipud2d = require( './../../../base/flipud2d' );


// MAIN //

/**
* Reverses the order of elements along the second-to-last dimension of a three-dimensional nested input array.
*
* ## Notes
*
* -   The function does **not** perform a deep copy of nested array elements.
*
* @param {ArrayLikeObject<ArrayLikeObject<Collection>>} x - nested input array
* @returns {Array<Array<Collection>>} output array
*
* @example
* var x = [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ];
*
* var out = flipud3d( x );
* // returns [ [ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ] ]
*/
function flipud3d( x ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < x.length; i++ ) {
		out.push( flipud2d( x[ i ] ) );
	}
	return out;
}


// EXPORTS //

module.exports = flipud3d;
