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
* Applies a quaternary callback to elements in four broadcasted input arrays and assigns results to elements in a two-dimensional nested output array.
*
* @param {ArrayLikeObject<Array<Collection>>} arrays - array-like object containing four input nested arrays and one output nested array
* @param {ArrayLikeObject<NonNegativeIntegerArray>} shapes - array shapes
* @param {Callback} fcn - quaternary callback
* @returns {void}
*
* @example
* var add = require( '@stdlib/math/base/ops/add4' );
* var ones2d = require( '@stdlib/array/base/ones2d' );
* var zeros2d = require( '@stdlib/array/base/zeros2d' );
*
* var shapes = [
*     [ 1, 2 ],
*     [ 2, 1 ],
*     [ 1, 1 ],
*     [ 2, 2 ],
*     [ 2, 2 ]
* ];
*
* var x = ones2d( shapes[ 0 ] );
* var y = ones2d( shapes[ 1 ] );
* var z = ones2d( shapes[ 2 ] );
* var w = ones2d( shapes[ 3 ] );
* var out = zeros2d( shapes[ 4 ] );
*
* bquaternary2d( [ x, y, z, w, out ], shapes, add );
*
* console.log( out );
* // => [ [ 4.0, 4.0 ], [ 4.0, 4.0 ] ]
*/
function bquaternary2d( arrays, shapes, fcn ) {
	var dx0;
	var dx1;
	var dy0;
	var dy1;
	var dz0;
	var dz1;
	var dw0;
	var dw1;
	var S0;
	var S1;
	var i0;
	var i1;
	var j0;
	var j1;
	var k0;
	var k1;
	var m0;
	var m1;
	var n0;
	var n1;
	var x0;
	var y0;
	var z0;
	var w0;
	var u0;
	var sh;
	var st;
	var o;
	var x;
	var y;
	var z;
	var w;
	var u;

	sh = shapes[ 4 ];
	S0 = sh[ 1 ];
	S1 = sh[ 0 ];
	if ( S0 <= 0 || S1 <= 0 ) {
		return;
	}
	o = broadcastArray( arrays[ 0 ], shapes[ 0 ], sh );
	x = o.data;
	st = o.strides;
	dx0 = st[ 1 ];
	dx1 = st[ 0 ];

	o = broadcastArray( arrays[ 1 ], shapes[ 1 ], sh );
	y = o.data;
	st = o.strides;
	dy0 = st[ 1 ];
	dy1 = st[ 0 ];

	o = broadcastArray( arrays[ 2 ], shapes[ 2 ], sh );
	z = o.data;
	st = o.strides;
	dz0 = st[ 1 ];
	dz1 = st[ 0 ];

	o = broadcastArray( arrays[ 3 ], shapes[ 3 ], sh );
	w = o.data;
	st = o.strides;
	dw0 = st[ 1 ];
	dw1 = st[ 0 ];

	u = arrays[ 4 ];

	j1 = 0;
	k1 = 0;
	m1 = 0;
	n1 = 0;
	for ( i1 = 0; i1 < S1; i1++ ) {
		j0 = 0;
		k0 = 0;
		m0 = 0;
		n0 = 0;
		x0 = x[ j1 ];
		y0 = y[ k1 ];
		z0 = z[ m1 ];
		w0 = w[ n1 ];
		u0 = u[ i1 ];
		for ( i0 = 0; i0 < S0; i0++ ) {
			u0[ i0 ] = fcn( x0[ j0 ], y0[ k0 ], z0[ m0 ], w0[ n0 ] );
			j0 += dx0;
			k0 += dy0;
			m0 += dz0;
			n0 += dw0;
		}
		j1 += dx1;
		k1 += dy1;
		m1 += dz1;
		n1 += dw1;
	}
}


// EXPORTS //

module.exports = bquaternary2d;
