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

// MAIN //

/**
* Applies a ternary callback to elements in three four-dimensional nested input arrays and assigns results to elements in a four-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param {ArrayLikeObject<Array<Collection>>} arrays - array-like object containing three input nested arrays and one output nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Callback} fcn - ternary callback
* @returns {void}
*
* @example
* var add = require( '@stdlib/math/base/ops/add3' );
* var ones4d = require( '@stdlib/array/base/ones4d' );
* var zeros4d = require( '@stdlib/array/base/zeros4d' );
*
* var shape = [ 1, 1, 2, 2 ];
*
* var x = ones4d( shape );
* var y = ones4d( shape );
* var z = ones4d( shape );
* var out = zeros4d( shape );
*
* ternary4d( [ x, y, z, out ], shape, add );
*
* console.log( out );
* // => [ [ [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ] ] ]
*/
function ternary4d( arrays, shape, fcn ) {
	var S0;
	var S1;
	var S2;
	var S3;
	var i0;
	var i1;
	var i2;
	var i3;
	var x0;
	var y0;
	var z0;
	var w0;
	var x1;
	var y1;
	var z1;
	var w1;
	var x2;
	var y2;
	var z2;
	var w2;
	var x;
	var y;
	var z;
	var w;

	S0 = shape[ 3 ];
	S1 = shape[ 2 ];
	S2 = shape[ 1 ];
	S3 = shape[ 0 ];
	if ( S0 <= 0 || S1 <= 0 || S2 <= 0 || S3 <= 0 ) {
		return;
	}
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	z = arrays[ 2 ];
	w = arrays[ 3 ];
	for ( i3 = 0; i3 < S3; i3++ ) {
		x2 = x[ i3 ];
		y2 = y[ i3 ];
		z2 = z[ i3 ];
		w2 = w[ i3 ];
		for ( i2 = 0; i2 < S2; i2++ ) {
			x1 = x2[ i2 ];
			y1 = y2[ i2 ];
			z1 = z2[ i2 ];
			w1 = w2[ i2 ];
			for ( i1 = 0; i1 < S1; i1++ ) {
				x0 = x1[ i1 ];
				y0 = y1[ i1 ];
				z0 = z1[ i1 ];
				w0 = w1[ i1 ];
				for ( i0 = 0; i0 < S0; i0++ ) {
					w0[ i0 ] = fcn( x0[ i0 ], y0[ i0 ], z0[ i0 ] );
				}
			}
		}
	}
}


// EXPORTS //

module.exports = ternary4d;
