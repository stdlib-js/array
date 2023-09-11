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

var broadcastArray = require( './../../../base/broadcast-array' );


// MAIN //

/**
* Applies a binary callback to elements in two broadcasted input arrays and assigns results to elements in a three-dimensional nested output array.
*
* @param {ArrayLikeObject<Array>} arrays - array-like object containing two input nested arrays and one output nested array
* @param {ArrayLikeObject<NonNegativeIntegerArray>} shapes - array shapes
* @param {Callback} fcn - binary callback
* @returns {void}
*
* @example
* var ones3d = require( '@stdlib/array/base/ones3d' );
* var zeros3d = require( '@stdlib/array/base/zeros3d' );
* var add = require( '@stdlib/math/base/ops/add' );
*
* var shapes = [
*     [ 1, 1, 2 ],
*     [ 2, 1, 1 ],
*     [ 2, 2, 2 ]
* ];
*
* var x = ones3d( shapes[ 0 ] );
* var y = ones3d( shapes[ 1 ] );
* var z = zeros3d( shapes[ 2 ] );
*
* bbinary3d( [ x, y, z ], shapes, add );
*
* console.log( z );
* // => [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ], [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ]
*/
function bbinary3d( arrays, shapes, fcn ) {
	var dx0;
	var dx1;
	var dx2;
	var dy0;
	var dy1;
	var dy2;
	var S0;
	var S1;
	var S2;
	var i0;
	var i1;
	var i2;
	var j0;
	var j1;
	var j2;
	var k0;
	var k1;
	var k2;
	var x0;
	var x1;
	var y0;
	var y1;
	var z0;
	var z1;
	var sh;
	var st;
	var o;
	var x;
	var y;
	var z;

	sh = shapes[ 2 ];
	S0 = sh[ 2 ];
	S1 = sh[ 1 ];
	S2 = sh[ 0 ];
	if ( S0 <= 0 || S1 <= 0 || S2 <= 0 ) {
		return;
	}
	o = broadcastArray( arrays[ 0 ], shapes[ 0 ], sh );
	x = o.data;
	st = o.strides;
	dx0 = st[ 2 ];
	dx1 = st[ 1 ];
	dx2 = st[ 0 ];

	o = broadcastArray( arrays[ 1 ], shapes[ 1 ], sh );
	y = o.data;
	st = o.strides;
	dy0 = st[ 2 ];
	dy1 = st[ 1 ];
	dy2 = st[ 0 ];

	z = arrays[ 2 ];

	j2 = 0;
	k2 = 0;
	for ( i2 = 0; i2 < S2; i2++ ) {
		j1 = 0;
		k1 = 0;
		x1 = x[ j2 ];
		y1 = y[ k2 ];
		z1 = z[ i2 ];
		for ( i1 = 0; i1 < S1; i1++ ) {
			j0 = 0;
			k0 = 0;
			x0 = x1[ j1 ];
			y0 = y1[ k1 ];
			z0 = z1[ i1 ];
			for ( i0 = 0; i0 < S0; i0++ ) {
				z0[ i0 ] = fcn( x0[ j0 ], y0[ k0 ] );
				j0 += dx0;
				k0 += dy0;
			}
			j1 += dx1;
			k1 += dy1;
		}
		j2 += dx2;
		k2 += dy2;
	}
}


// EXPORTS //

module.exports = bbinary3d;
