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
* Applies a unary callback to elements in a broadcasted nested input array and assigns results to elements in a four-dimensional nested output array.
*
* @param {ArrayLikeObject<Array<Collection>>} arrays - array-like object containing one input nested array and one output nested array
* @param {ArrayLikeObject<NonNegativeIntegerArray>} shapes - array shapes
* @param {Callback} fcn - unary callback
* @returns {void}
*
* @example
* var ones4d = require( '@stdlib/array/base/ones4d' );
* var zeros4d = require( '@stdlib/array/base/zeros4d' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shapes = [
*     [ 1, 1, 1, 2 ],
*     [ 1, 1, 2, 2 ]
* ];
*
* var x = ones4d( shapes[ 0 ] );
* var y = zeros4d( shapes[ 1 ] );
*
* bunary4d( [ x, y ], shapes, scale );
*
* console.log( y );
* // => [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
*/
function bunary4d( arrays, shapes, fcn ) {
	var dx0;
	var dx1;
	var dx2;
	var dx3;
	var S0;
	var S1;
	var S2;
	var S3;
	var i0;
	var i1;
	var i2;
	var i3;
	var j0;
	var j1;
	var j2;
	var j3;
	var x0;
	var x1;
	var x2;
	var y0;
	var y1;
	var y2;
	var sh;
	var st;
	var o;
	var x;
	var y;

	sh = shapes[ 1 ];
	S0 = sh[ 3 ];
	S1 = sh[ 2 ];
	S2 = sh[ 1 ];
	S3 = sh[ 0 ];
	if ( S0 <= 0 || S1 <= 0 || S2 <= 0 || S3 <= 0 ) {
		return;
	}
	o = broadcastArray( arrays[ 0 ], shapes[ 0 ], sh );
	x = o.data;
	st = o.strides;
	dx0 = st[ 3 ];
	dx1 = st[ 2 ];
	dx2 = st[ 1 ];
	dx3 = st[ 0 ];

	y = arrays[ 1 ];
	j3 = 0;
	for ( i3 = 0; i3 < S3; i3++ ) {
		j2 = 0;
		x2 = x[ j3 ];
		y2 = y[ i3 ];
		for ( i2 = 0; i2 < S2; i2++ ) {
			j1 = 0;
			x1 = x2[ j2 ];
			y1 = y2[ i2 ];
			for ( i1 = 0; i1 < S1; i1++ ) {
				j0 = 0;
				x0 = x1[ j1 ];
				y0 = y1[ i1 ];
				for ( i0 = 0; i0 < S0; i0++ ) {
					y0[ i0 ] = fcn( x0[ j0 ] );
					j0 += dx0;
				}
				j1 += dx1;
			}
			j2 += dx2;
		}
		j3 += dx3;
	}
}


// EXPORTS //

module.exports = bunary4d;
