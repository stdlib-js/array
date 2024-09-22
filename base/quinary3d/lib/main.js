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
* Applies a quinary callback to elements in five three-dimensional nested input arrays and assigns results to elements in a three-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param {ArrayLikeObject<Array<Array<Collection>>>} arrays - array-like object containing five input nested arrays and one output nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Callback} fcn - quinary callback
* @returns {void}
*
* @example
* var ones3d = require( '@stdlib/array/base/ones3d' );
* var zeros3d = require( '@stdlib/array/base/zeros3d' );
* var add = require( '@stdlib/math/base/ops/add5' );
*
* var shape = [ 1, 2, 2 ];
*
* var x = ones3d( shape );
* var y = ones3d( shape );
* var z = ones3d( shape );
* var w = ones3d( shape );
* var v = ones3d( shape );
* var out = zeros3d( shape );
*
* quinary3d( [ x, y, z, w, v, out ], shape, add );
*
* console.log( out );
* // => [ [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ] ]
*/
function quinary3d( arrays, shape, fcn ) {
	var S0;
	var S1;
	var S2;
	var i0;
	var i1;
	var i2;
	var x0;
	var y0;
	var z0;
	var w0;
	var u0;
	var v0;
	var x1;
	var y1;
	var z1;
	var w1;
	var u1;
	var v1;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;

	S0 = shape[ 2 ];
	S1 = shape[ 1 ];
	S2 = shape[ 0 ];
	if ( S0 <= 0 || S1 <= 0 || S2 <= 0 ) {
		return;
	}
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	z = arrays[ 2 ];
	w = arrays[ 3 ];
	u = arrays[ 4 ];
	v = arrays[ 5 ];
	for ( i2 = 0; i2 < S2; i2++ ) {
		x1 = x[ i2 ];
		y1 = y[ i2 ];
		z1 = z[ i2 ];
		w1 = w[ i2 ];
		u1 = u[ i2 ];
		v1 = v[ i2 ];
		for ( i1 = 0; i1 < S1; i1++ ) {
			x0 = x1[ i1 ];
			y0 = y1[ i1 ];
			z0 = z1[ i1 ];
			w0 = w1[ i1 ];
			u0 = u1[ i1 ];
			v0 = v1[ i1 ];
			for ( i0 = 0; i0 < S0; i0++ ) {
				v0[ i0 ] = fcn( x0[ i0 ], y0[ i0 ], z0[ i0 ], w0[ i0 ], u0[ i0 ] ); // eslint-disable-line max-len
			}
		}
	}
}


// EXPORTS //

module.exports = quinary3d;
