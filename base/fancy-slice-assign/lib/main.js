/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isMostlySafeCast = require( './../../../base/assert/is-mostly-safe-data-type-cast' );
var isRealDataType = require( './../../../base/assert/is-real-data-type' );
var isComplexDataType = require( './../../../base/assert/is-complex-floating-point-data-type' );
var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );
var sliceLength = require( '@stdlib/slice/base/length' );
var dtype = require( './../../../dtype' );
var convert = require( './../../../convert' );
var gcopy = require( '@stdlib/blas/base/gcopy' ).ndarray;
var format = require( '@stdlib/string/format' );


// MODULES //

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* @param {Collection} x - input array
* @param {Collection} y - output array
* @param {Slice} s - slice object
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @throws {RangeError} slice exceeds array bounds
* @throws {Error} input array must be broadcast compatible with an output array view
* @throws {TypeError} input array cannot be safely cast to the output array data type
* @returns {Collection} output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var x = [ 1, 2, 3, 4 ];
* var y = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns [ 0, 4, 0, 3, 0, 2, 0, 1 ]
*
* var bool = ( out === y );
* // returns true
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Slice = require( '@stdlib/slice/ctor' );
*
* var x = new Int32Array( [ 5 ] );
* var y = new Int32Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Int32Array>[ 0, 5, 0, 5, 0, 5, 0, 5 ]
*
* var bool = ( out === y );
* // returns true
*/
function sliceAssign( x, y, s, strict ) {
	var xlen;
	var ylen;
	var xdt;
	var ydt;
	var ns;
	var xs;
	var N;

	xdt = dtype( x ) || 'generic';
	ydt = dtype( y ) || 'generic';

	xlen = x.length;
	ylen = y.length;

	// Safe casts are always allowed and allow same kind casts (i.e., downcasts) only when the output data type is floating-point...
	if ( !isMostlySafeCast( xdt, ydt ) ) {
		throw new TypeError( format( 'invalid argument. Input array values cannot be safely cast to the output array data type. Data types: [%s, %s].', xdt, ydt ) );
	}
	// When performing a real-to-complex assignment, interpret the real-valued array as containing real components with implied imaginary components equal to zero and explicitly convert to a complex-valued array...
	if ( isComplexDataType( ydt ) && isRealDataType( xdt ) ) {
		x = convert( x, ydt );
	}
	// Normalize the slice object base on the output array length:
	ns = normalizeSlice( s, ylen, true );

	// Check whether the slice exceeds the array bounds...
	if ( ns.code ) {
		if ( strict ) {
			throw new RangeError( format( 'invalid argument. Slice exceeds array bounds. Array length: %d.', ylen ) );
		}
		// Normalize again, this time allowing for out-of-bounds indices:
		ns = normalizeSlice( s, ylen, false );
	}
	// Compute the slice length:
	N = sliceLength( ns );

	// Broadcast the input array:
	if ( xlen === 1 ) {
		xs = 0;
	} else if ( xlen === N ) {
		xs = 1;
	} else {
		throw new Error( format( 'invalid argument. Input array and the output array slice are broadcast incompatible. Array length: %u. Desired length: %u.', xlen, N ) );
	}
	// Copy elements to the output array:
	gcopy( N, x, xs, 0, y, ns.step, ns.start );

	return y;
}


// EXPORTS //

module.exports = sliceAssign;
