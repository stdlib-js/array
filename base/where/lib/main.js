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

var resolveGetter = require( './../../../base/resolve-getter' );
var maxn = require( '@stdlib/math/base/special/maxn' );
var resolveStride = require( './resolve_stride.js' );


// MAIN //

/**
* Takes elements from either one of two arrays depending on a condition.
*
* @param {Collection} condition - indicator array
* @param {Collection} x - first input array
* @param {Collection} y - second input array
* @throws {Error} input arrays must be broadcast compatible
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
*
* var condition = [ true, false, true, false ];
*
* var z = where( condition, x, y );
* // returns [ 1, 6, 3, 8 ]
*/
function where( condition, x, y ) {
	var xget;
	var yget;
	var cget;
	var lens;
	var out;
	var sx;
	var sy;
	var sc;
	var ix;
	var iy;
	var ic;
	var N;
	var v;
	var i;

	// Cache the lengths of the input arrays:
	lens = [ condition.length, x.length, y.length ];

	// Check whether we can avoid doing any further work...
	if ( lens[ 0 ] === 0 ) {
		// E.g., `where( [], [ 1, 2 ], [ 3, 4 ] )`
		return [];
	}
	// Compute the output array length:
	N = maxn( lens[ 0 ], lens[ 1 ], lens[ 2 ] );

	// Broadcast the arrays by computing strides:
	sc = resolveStride( lens[ 0 ], N );
	sx = resolveStride( lens[ 1 ], N );
	sy = resolveStride( lens[ 2 ], N );

	// Resolve accessors for retrieving array elements:
	cget = resolveGetter( condition );
	xget = resolveGetter( x );
	yget = resolveGetter( y );

	// Initialize indices:
	ic = 0;
	ix = 0;
	iy = 0;

	// Extract each desired element from a provided array...
	out = [];
	for ( i = 0; i < N; i++ ) {
		if ( cget( condition, ic ) ) {
			v = xget( x, ix );
		} else {
			v = yget( y, iy );
		}
		out.push( v ); // use `Array#push` to ensure "fast" elements
		ic += sc;
		ix += sx;
		iy += sy;
	}
	return out;
}


// EXPORTS //

module.exports = where;
