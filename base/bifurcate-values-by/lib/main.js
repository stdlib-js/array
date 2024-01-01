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
* Splits element values into two groups according to a predicate function.
*
* @param {Collection} x - input array
* @param {Function} predicate - predicate function specifying which group an element in the input collection belongs to
* @param {*} [thisArg] - predicate function execution context
* @returns {Object} group results
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
*
* var x = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = bifurcateValuesBy( x, predicate );
* // returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
*/
function bifurcateValuesBy( x, predicate, thisArg ) {
	var get;
	var len;
	var out;
	var v;
	var i;

	// Get the number of elements to group:
	len = x.length;
	if ( len === 0 ) {
		return [];
	}
	// Resolve an accessor for retrieving array elements:
	get = resolveGetter( x );

	// Loop over the elements and assign each to a group...
	out = [ [], [] ];
	for ( i = 0; i < len; i++ ) {
		v = get( x, i );
		if ( predicate.call( thisArg, v, i, x ) ) {
			out[ 0 ].push( v );
		} else {
			out[ 1 ].push( v );
		}
	}
	return out;
}


// EXPORTS //

module.exports = bifurcateValuesBy;
