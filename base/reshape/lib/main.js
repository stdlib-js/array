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

var flatten = require( './../../../base/flatten' );
var slice = require( './../../../base/slice' );


// FUNCTIONS //

/**
* Recursive reshapes an array.
*
* @private
* @param {Array} array - input n-dimensional nested array
* @param {NonNegativeInteger} ndims - number of dimensions
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeInteger} dim - dimension index
* @param {NonNegativeInteger} index - sub-array index
* @returns {Array} output m-dimensional nested array
*/
function recurse( array, ndims, shape, dim, index ) {
	var stepSize;
	var subArray;
	var out;
	var d;
	var S;
	var i;

	S = shape[ dim ];
	if ( dim === ndims - 1 ) {
		return slice( array, index, index + S );
	}

	d = dim + 1;
	stepSize = 1;
	for ( i = d; i < shape.length; i++ ) {
		stepSize *= shape[ i ];
	}

	out = [];
	for ( i = 0; i < S; i++ ) {
		subArray = recurse( array, ndims, shape, d, index );
		out.push( subArray );
		index += stepSize;
	}
	return out;
}


// MAIN //

/**
* Reshape a nested array into another nested array having a desired shape.
*
* @param {Array} x - input nested array
* @param {NonNegativeIntegerArray} fromShape - shape of the input array
* @param {NonNegativeIntegerArray} toShape - shape of the output array
* @param {boolean} colexicographic - specifies whether to reshape the array in colexicographic order
* @returns {Array} output nested array
*
* @example
* var x = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];
*
* var out = reshape( x, [ 2, 3 ], [ 3, 2 ], false );
* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
*/
function reshape( x, fromShape, toShape, colexicographic ) {
	var f = flatten( x, fromShape, colexicographic );
	return recurse( f, toShape.length, toShape, 0, 0 );
}


// EXPORTS //

module.exports = reshape;
