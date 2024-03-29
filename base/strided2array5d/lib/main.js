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

var resolveGetter = require( './../../../base/resolve-getter' );


// MAIN //

/**
* Converts a strided array to a five-dimensional nested array.
*
* ## Notes
*
* -   The function assumes that the input array is compatible with the specified array shape, dimension strides, and index offset.
*
* @param {Collection} x - input array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - dimension strides
* @param {NonNegativeInteger} offset - index of the first indexed value in the input array
* @returns {Array<Array<Array<Array<Array>>>>} five-dimensional nested array
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var arr = strided2array5d( x, [ 1, 1, 1, 3, 2 ], [ 6, 6, 6, 2, 1 ], 0 );
* // returns [ [ [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ] ] ]
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var arr = strided2array5d( x, [ 1, 1, 1, 3, 2 ], [ 1, 1, 1, 1, 3 ], 0 );
* // returns [ [ [ [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ] ] ] ]
*/
function strided2array5d( x, shape, strides, offset ) {
	var get;
	var out;
	var dx0;
	var dx1;
	var dx2;
	var dx3;
	var dx4;
	var ix3;
	var ix2;
	var ix1;
	var ix0;
	var S0;
	var S1;
	var S2;
	var S3;
	var S4;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var t4;
	var t3;
	var t2;
	var t1;

	get = resolveGetter( x );

	S4 = shape[ 0 ];
	S3 = shape[ 1 ];
	S2 = shape[ 2 ];
	S1 = shape[ 3 ];
	S0 = shape[ 4 ];

	dx4 = strides[ 0 ];
	dx3 = strides[ 1 ];
	dx2 = strides[ 2 ];
	dx1 = strides[ 3 ];
	dx0 = strides[ 4 ];

	out = [];
	for ( i4 = 0; i4 < S4; i4++ ) {
		t4 = [];
		ix3 = offset + ( dx4*i4 );
		for ( i3 = 0; i3 < S3; i3++ ) {
			t3 = [];
			ix2 = ix3 + ( dx3*i3 );
			for ( i2 = 0; i2 < S2; i2++ ) {
				t2 = [];
				ix1 = ix2 + ( dx2*i2 );
				for ( i1 = 0; i1 < S1; i1++ ) {
					t1 = [];
					ix0 = ix1 + ( dx1*i1 );
					for ( i0 = 0; i0 < S0; i0++ ) {
						t1.push( get( x, ix0 ) );
						ix0 += dx0;
					}
					t2.push( t1 );
				}
				t3.push( t2 );
			}
			t4.push( t3 );
		}
		out.push( t4 );
	}
	return out;
}


// EXPORTS //

module.exports = strided2array5d;
