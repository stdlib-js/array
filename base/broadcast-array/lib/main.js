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

var copy = require( './../../../base/copy-indexed' );
var zeros = require( './../../../base/zeros' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Broadcasts an array to a specified shape.
*
* @param {Collection} x - input array
* @param {NonNegativeIntegerArray} inShape - input array shape
* @param {NonNegativeIntegerArray} outShape - output array shape
* @throws {Error} input array cannot have more dimensions than the desired shape
* @throws {Error} input array dimension sizes must be `1` or equal to the corresponding dimension in the provided output shape
* @throws {Error} input array and desired shape must be broadcast compatible
* @returns {Object} broadcast object
*
* @example
* var x = [ 1, 2 ];
*
* var out = broadcastArray( x, [ 2 ], [ 2, 2 ] );
* // returns {...}
*
* var shape = out.shape;
* // returns [ 2, 2 ]
*
* var strides = out.strides;
* // returns [ 0, 1 ]
*
* var ref = out.ref;
* // returns [ 1, 2 ]
*
* var bool = ( x === ref );
* // returns true
*
* var data = out.data;
* // returns [ [ 1, 2 ] ]
*
* @example
* var x = [ 1, 2 ];
*
* var out = broadcastArray( x, [ 2 ], [ 2, 1, 2 ] );
* // returns {...}
*
* var data = out.data;
* // returns [ [ [ 1, 2 ] ] ]
*
* var strides = out.strides;
* // returns [ 0, 0, 1 ]
*
* @example
* var x = [ [ 1 ], [ 2 ] ];
*
* var out = broadcastArray( x, [ 2, 1 ], [ 3, 2, 2 ] );
* // returns {...}
*
* var data = out.data;
* // returns [ [ [ 1 ], [ 2 ] ] ]
*
* var strides = out.strides;
* // returns [ 0, 1, 0 ]
*/
function broadcastArray( x, inShape, outShape ) {
	var data;
	var dim;
	var st;
	var N;
	var M;
	var d;
	var i;
	var j;

	N = outShape.length;
	M = inShape.length;
	if ( N < M ) {
		throw new Error( 'invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.' );
	}
	// Prepend additional dimensions...
	data = x;
	for ( i = M; i < N; i++ ) {
		data = [ data ];
	}

	// Initialize a strides array:
	st = zeros( N );

	// Determine the output array strides...
	for ( i = N-1; i >= 0; i-- ) {
		j = M - N + i;
		if ( j < 0 ) {
			// Prepended singleton dimension; stride is zero...
			continue;
		}
		d = inShape[ j ];
		dim = outShape[ i ];
		if ( dim !== 0 && dim < d ) {
			throw new Error( format( 'invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.', copy( inShape ).join( ', ' ), copy( outShape ).join( ', ' ), i ) );
		}
		if ( d === dim ) {
			// As the dimension sizes are equal, the stride is one, meaning that each element in the array should be iterated over as normal...
			st[ i ] = 1;
		} else if ( d === 1 ) {
			// In order to broadcast a dimension, we set the stride for that dimension to zero...
			st[ i ] = 0;
		} else {
			// At this point, we know that `dim > d` and that `d` does not equal `1` (e.g., `dim=3` and `d=2`); in which case, the shapes are considered incompatible (even for desired shapes which are multiples of array dimensions, as might be desired when "tiling" an array; e.g., `dim=4` and `d=2`)...
			throw new Error( format( 'invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.', copy( inShape ).join( ', ' ), copy( outShape ).join( ', ' ), i ) );
		}
	}
	// Return broadcast results:
	return {
		'ref': x,                  // reference to the original input array
		'data': data,              // broadcasted array
		'shape': copy( outShape ), // copy in order to prevent mutation
		'strides': st
	};
}


// EXPORTS //

module.exports = broadcastArray;
