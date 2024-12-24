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

var isArray = require( '@stdlib/assert/is-array' );
var resolveGetter = require( './../../../base/resolve-getter' );


// MAIN //

/**
* Groups element indices as arrays associated with distinct keys.
*
* @param {Collection} x - input array
* @param {Collection} groups - array defining which group an element in the input array belongs to
* @throws {RangeError} must provide arrays having the same length
* @returns {Object} group results
*
* @example
* var x = [ 'beep', 'boop', 'foo', 'bar' ];
* var groups = [ 'b', 'b', 'f', 'b' ];
*
* var out = groupIndices( x, groups );
* // returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
*/
function groupIndices( x, groups ) {
	var gget;
	var len;
	var out;
	var g;
	var o;
	var i;

	// Get the number of elements to group:
	len = x.length;
	if ( groups.length !== len ) {
		throw new RangeError( 'invalid argument. The first and second arguments must have the same length.' );
	}
	// Resolve accessors for retrieving array elements:
	gget = resolveGetter( groups );

	// Loop over the elements and assign each to a group...
	out = {};
	for ( i = 0; i < len; i++ ) {
		g = gget( groups, i ).toString();
		o = out[ g ];
		if ( isArray( o ) ) {
			o.push( i );
		} else {
			out[ g ] = [ i ];
		}
	}
	return out;
}


// EXPORTS //

module.exports = groupIndices;
