/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Returns new arrays by applying a mask to one or more provided input arrays in a single pass.
*
* @param {Collection} x - first input array
* @param {Collection} [...arrays] - additional input arrays
* @param {Collection} mask - mask array
* @returns {Array<Array>} output arrays
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var idx = [ 5, 6, 7, 8 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = mskfiltern( x, idx, mask );
* // returns [ [ 2, 4 ], [ 6, 8 ] ]
*/
function mskfiltern() {
	var getters;
	var arrays;
	var nargs;
	var mget;
	var mask;
	var out;
	var i;
	var j;

	nargs = arguments.length;
	nargs -= 1;

	// Resolve the mask array and its associated accessor:
	mask = arguments[ nargs ];
	mget = resolveGetter( mask );

	// Resolve accessors for retrieving array elements and initialize the output arrays...
	getters = [];
	arrays = [];
	out = [];
	for ( i = 0; i < nargs; i++ ) {
		arrays.push( arguments[ i ] );
		getters.push( resolveGetter( arrays[ i ] ) );
		out.push( [] );
	}
	// Extract each desired element from the provided arrays...
	for ( i = 0; i < mask.length; i++ ) {
		if ( mget( mask, i ) ) {
			for ( j = 0; j < nargs; j++ ) {
				out[ j ].push( getters[ j ]( arrays[ j ], i ) ); // use `Array#push` to ensure "fast" elements
			}
		}
	}
	return out;
}


// EXPORTS //

module.exports = mskfiltern;
