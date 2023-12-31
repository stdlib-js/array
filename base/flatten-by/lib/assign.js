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

/* eslint-disable max-len */

'use strict';

// MODULES //

var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var vind2bind = require( '@stdlib/ndarray/base/vind2bind' );
var numel = require( '@stdlib/ndarray/base/numel' );
var grev = require( '@stdlib/blas/ext/base/grev' );
var zeros = require( './../../../base/zeros' );
var copy = require( './../../../base/copy-indexed' );


// VARIABLES //

var MODE = 'throw';


// FUNCTIONS //

/**
* Copies a specified number of array elements to a provided array according to a callback function.
*
* @private
* @param {Array} x - input array
* @param {NonNegativeInteger} N - number of elements to copy
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
*
* @example
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = [ 0, 0, 0 ];
* copyBy( x, 3, out, 1, 0, scale );
*
* var o = out;
* // returns [ 2, 4, 6 ]
*/
function copyBy( x, N, out, stride, offset, clbk, thisArg ) {
	var i;
	for ( i = 0; i < N; i++ ) {
		out[ offset ] = clbk.call( thisArg, x[ i ], [ i ], x );
		offset += stride;
	}
}

/**
* Recursively flattens an array in lexicographic order.
*
* @private
* @param {Array} orig - original input array
* @param {Array} x - array to flatten
* @param {NonNegativeInteger} ndims - number of dimensions in the input array
* @param {NonNegativeIntegerArray} shape - shape of the input array
* @param {NonNegativeInteger} dim - dimension index
* @param {NonNegativeIntegerArray} indices - outer array element indices
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
* @returns {NonNegativeInteger} offset for next output array element
*/
function recurseLexicographic( orig, x, ndims, shape, dim, indices, out, stride, offset, clbk, thisArg ) { // eslint-disable-line max-params
	var FLG;
	var idx;
	var S;
	var d;
	var i;

	// Check whether we've reached the last dimension:
	d = dim + 1;
	FLG = ( d === ndims );

	S = shape[ dim ];
	for ( i = 0; i < S; i++ ) {
		idx = indices.slice(); // we explicitly copy in order to avoid potential mutation when calling `clbk`
		idx.push( i );
		if ( FLG ) {
			out[ offset ] = clbk.call( thisArg, x[ i ], idx, orig );
			offset += stride;
		} else {
			offset = recurseLexicographic( orig, x[ i ], ndims, shape, d, idx, out, stride, offset, clbk, thisArg );
		}
	}
	return offset;
}

/**
* Flattens an array in colexicographic order.
*
* @private
* @param {Array} x - array to flatten
* @param {NonNegativeInteger} ndims - number of dimensions in the input array
* @param {NonNegativeIntegerArray} shape - shape of the input array
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
*/
function flattenColexicographic( x, ndims, shape, out, stride, offset, clbk, thisArg ) {
	var len;
	var tmp;
	var ord;
	var sh;
	var sx;
	var j;
	var i;

	// Note that, in contrast to lexicographic iteration, we cannot readily define a straightforward recursive definition for colexicographic iteration. Accordingly, we have to perform a workaround in which we first flatten in lexicographic order and then perform an out-of-place transposition to return an array in colexicographic order.

	// Determine how many elements will be in the output array:
	len = numel( shape );

	// For input arrays having an arbitrary number of dimensions, first flatten in lexicographic order:
	tmp = zeros( len );
	recurseLexicographic( x, x, ndims, shape, 0, [], tmp, 1, 0, clbk, thisArg );

	// Define the memory layout:
	ord = 'row-major';

	// Generate a stride array for lexicographic order:
	sx = shape2strides( shape, ord );

	// Reverse the dimensions and strides (i.e., define the shape and strides of the transpose):
	sh = copy( shape );
	grev( ndims, sh, 1 );
	grev( ndims, sx, 1 );

	// Iterate over each element based on the linear **view** index (note: this has negative performance implications due to lack of data locality)...
	for ( i = 0; i < len; i++ ) {
		j = vind2bind( sh, sx, 0, ord, i, MODE );
		out[ offset ] = tmp[ j ];
		offset += stride;
	}
}


// MAIN //

/**
* Flattens an n-dimensional nested array according to a callback function and assigns elements to a provided output array.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
*
* @param {Array} x - input nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {boolean} colexicographic - specifies whether to flatten array values in colexicographic order
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flattenBy( x, [ 2, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
* // returns <Float64Array>[ 2, 4, 6, 8 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flattenBy( x, [ 2, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
* // returns <Float64Array>[ 2, 6, 4, 8 ]
*/
function flattenBy( x, shape, colexicographic, out, stride, offset, clbk, thisArg ) {
	var ndims = shape.length;
	if ( ndims === 0 ) { // 0-dimensional array
		return out;
	}
	if ( ndims === 1 ) { // 1-dimensional array
		// For 1-dimensional arrays, we can perform simple iteration:
		copyBy( x, shape[ 0 ], out, stride, offset, clbk, thisArg );
		return out;
	}
	if ( colexicographic ) {
		flattenColexicographic( x, ndims, shape, out, stride, offset, clbk, thisArg );
		return out;
	}
	recurseLexicographic( x, x, ndims, shape, 0, [], out, stride, offset, clbk, thisArg );
	return out;
}


// EXPORTS //

module.exports = flattenBy;
