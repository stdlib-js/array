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
* Converts a strided array to a two-dimensional nested array.
*
* ## Notes
*
* -   The function assumes that the input array is compatible with the specified array shape, dimension strides, and index offset.
*
* @param {Collection} x - input array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - dimension strides
* @param {NonNegativeInteger} offset - index of the first indexed value in the input array
* @returns {Array<Array>} two-dimensional nested array
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var arr = strided2array2d( x, [ 3, 2 ], [ 2, 1 ], 0 );
* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var arr = strided2array2d( x, [ 3, 2 ], [ 1, 3 ], 0 );
* // returns [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
*/
function strided2array2d( x, shape, strides, offset ) {
	var get;
	var out;
	var tmp;
	var dx0;
	var dx1;
	var S0;
	var S1;
	var i0;
	var i1;
	var ix;

	get = resolveGetter( x );

	S1 = shape[ 0 ];
	S0 = shape[ 1 ];

	dx1 = strides[ 0 ];
	dx0 = strides[ 1 ];

	out = [];
	for ( i1 = 0; i1 < S1; i1++ ) {
		tmp = [];
		ix = offset + ( dx1*i1 );
		for ( i0 = 0; i0 < S0; i0++ ) {
			tmp.push( get( x, ix ) );
			ix += dx0;
		}
		out.push( tmp );
	}
	return out;
}


// EXPORTS //

module.exports = strided2array2d;
