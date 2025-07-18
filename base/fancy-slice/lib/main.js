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

var normalizeSlice = require( '@stdlib/slice/base/normalize-slice' );
var sliceLength = require( '@stdlib/slice/base/length' );
var zeros = require( './../../../base/zeros' );
var dtype = require( './../../../dtype' );
var gcopy = require( '@stdlib/blas/base/gcopy' ).ndarray;
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a shallow copy of a portion of an array.
*
* @param {Collection} x - input array
* @param {Slice} s - slice object
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @throws {RangeError} slice exceeds array bounds
* @returns {Collection} output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var x = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var y = slice( x, s, false );
* // returns [ 8, 6, 4, 2 ]
*
* var out = ( y === x );
* // returns false
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
* var Slice = require( '@stdlib/slice/ctor' );
*
* var x = new Int32Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var y = slice( x, s, false );
* // returns <Int32Array>[ 8, 6, 4, 2 ]
*
* var out = ( y === x );
* // returns false
*/
function slice( x, s, strict ) {
	var out;
	var len;
	var ns;
	var dt;
	var N;

	len = x.length;

	// Normalize the slice object base on the array length:
	ns = normalizeSlice( s, len, true );

	// Check whether the slice exceeds the array bounds...
	if ( ns.code ) {
		if ( strict ) {
			throw new RangeError( format( 'invalid argument. Slice exceeds array bounds. Array length: %d.', len ) );
		}
		// Normalize again, this time allowing for out-of-bounds indices:
		ns = normalizeSlice( s, len, false );
	}
	// Compute the slice length:
	N = sliceLength( ns );

	// Resolve the input array data type:
	dt = dtype( x );

	// Allocate an output array:
	if ( dt === 'generic' || dt === null ) { // note: if we were provided an "exotic" array object, fallback to always returning a "generic" array
		out = zeros( N );
	} else {
		out = new x.constructor( N ); // note: this should accommodate array species which inherit from built-in/known constructors and we assume that all constructors support providing a length argument
	}
	// Copy elements to the output array:
	gcopy( N, x, ns.step, ns.start, out, 1, 0 );

	return out;
}


// EXPORTS //

module.exports = slice;
