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

var filled = require( './../../../base/filled' );


// FUNCTIONS //

/**
* Recursive fills an array.
*
* @private
* @param {*} value - fill value
* @param {NonNegativeInteger} ndims - number of dimensions
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeInteger} dim - dimension index
* @param {Array} out - output array
* @returns {Array} output array
*/
function recurse( value, ndims, shape, dim, out ) {
	var S;
	var d;
	var i;

	S = shape[ dim ];

	// Check whether we're filling the last dimension:
	d = dim + 1;
	if ( d === ndims ) {
		return filled( value, S );
	}

	// Fill nested dimensions...
	for ( i = 0; i < S; i++ ) {
		out.push( recurse( value, ndims, shape, d, [] ) );
	}
	return out;
}


// MAIN //

/**
* Returns a filled n-dimensional nested array.
*
* @param {*} value - fill value
* @param {NonNegativeIntegerArray} shape - array shape
* @returns {Array} filled array
*
* @example
* var out = fillednd( 0.0, [ 3 ] );
* // returns [ 0.0, 0.0, 0.0 ]
*
* @example
* var out = fillednd( 0.0, [ 1, 3 ] );
* // returns [ [ 0.0, 0.0, 0.0 ] ]
*
* @example
* var out = fillednd( 'beep', [ 3, 1 ] );
* // returns [ [ 'beep' ], [ 'beep' ], [ 'beep' ] ]
*/
function fillednd( value, shape ) {
	return recurse( value, shape.length, shape, 0, [] );
}


// EXPORTS //

module.exports = fillednd;
