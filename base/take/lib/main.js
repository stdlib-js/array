/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var ind = require( '@stdlib/ndarray/base/ind' ).factory;


// MAIN //

/**
* Takes elements from an array.
*
* @param {Collection} x - input array
* @param {IntegerArray} indices - list of indices
* @param {string} mode - index mode
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var indices = [ 3, 1, 2, 0 ];
*
* var y = take( x, indices, 'throw' );
* // returns [ 4, 2, 3, 1 ]
*/
function take( x, indices, mode ) {
	var getIndex;
	var xget;
	var iget;
	var out;
	var max;
	var i;
	var j;

	// Resolve an accessor for retrieving array elements:
	xget = resolveGetter( x );
	iget = resolveGetter( indices );

	// Resolve a function for returning an index according to the specified index mode:
	getIndex = ind( mode );

	// Resolve the maximum index:
	max = x.length - 1;

	// Extract each desired element from the provided array...
	out = [];
	for ( i = 0; i < indices.length; i++ ) {
		j = getIndex( iget( indices, i ), max );
		out.push( xget( x, j ) ); // use `Array#push` to ensure "fast" elements
	}
	return out;
}


// EXPORTS //

module.exports = take;
