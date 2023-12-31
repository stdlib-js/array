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
* Splits array element indices into two groups.
*
* @param {Collection} x - input array
* @param {Collection} filter - array indicating which group an element in the input array belongs to
* @throws {RangeError} must provide arrays having the same length
* @returns {ArrayArray} results
*
* @example
* var x = [ 'beep', 'boop', 'foo', 'bar' ];
* var filter = [ true, true, false, true ];
*
* var out = bifurcateIndices( x, filter );
* // returns [ [ 0, 1, 3 ], [ 2 ] ]
*/
function bifurcateIndices( x, filter ) {
	var gget;
	var len;
	var out;
	var g;
	var i;

	// Get the number of elements to group:
	len = x.length;
	if ( filter.length !== len ) {
		throw new RangeError( 'invalid argument. The first and second arguments must have the same length.' );
	}
	if ( len === 0 ) {
		return [];
	}
	// Resolve accessors for retrieving array elements:
	gget = resolveGetter( filter );

	// Loop over the elements and assign each to a group...
	out = [ [], [] ];
	for ( i = 0; i < len; i++ ) {
		g = gget( filter, i );
		if ( g ) {
			out[ 0 ].push( i );
		} else {
			out[ 1 ].push( i );
		}
	}
	return out;
}


// EXPORTS //

module.exports = bifurcateIndices;
