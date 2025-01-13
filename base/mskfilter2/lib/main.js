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
* Returns new arrays by applying a mask to two provided input arrays in a single pass.
*
* @param {Collection} x - first input array
* @param {Collection} y - second input array
* @param {Collection} mask - mask array
* @returns {Array<Array>} output arrays
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = mskfilter2( x, y, mask );
* // returns [ [ 2, 4 ], [ 6, 8 ] ]
*/
function mskfilter2( x, y, mask ) {
	var xget;
	var yget;
	var mget;
	var o1;
	var o2;
	var i;

	// Resolve accessors for retrieving array elements:
	xget = resolveGetter( x );
	yget = resolveGetter( y );
	mget = resolveGetter( mask );

	// Extract each desired element from the provided arrays...
	o1 = [];
	o2 = [];
	for ( i = 0; i < x.length; i++ ) {
		if ( mget( mask, i ) ) {
			o1.push( xget( x, i ) ); // use `Array#push` to ensure "fast" elements
			o2.push( yget( y, i ) );
		}
	}
	return [ o1, o2 ];
}


// EXPORTS //

module.exports = mskfilter2;
