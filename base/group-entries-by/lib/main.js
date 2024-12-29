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
* Groups element entries according to an indicator function.
*
* @param {Collection} x - input array
* @param {Function} indicator - indicator function specifying which group an element in the input collection belongs to
* @param {*} [thisArg] - indicator function execution context
* @returns {Object} group results
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
*
* var x = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = groupEntriesBy( x, indicator );
* // returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
*/
function groupEntriesBy( x, indicator, thisArg ) {
	var get;
	var len;
	var out;
	var g;
	var o;
	var v;
	var i;

	// Get the number of elements to group:
	len = x.length;

	// Resolve an accessor for retrieving array elements:
	get = resolveGetter( x );

	// Loop over the elements and assign each to a group...
	out = {};
	for ( i = 0; i < len; i++ ) {
		v = get( x, i );
		g = indicator.call( thisArg, v, i, x );
		o = out[ g ];
		if ( isArray( o ) ) {
			o.push( [ i, v ] );
		} else {
			out[ g ] = [ [ i, v ] ];
		}
	}
	return out;
}


// EXPORTS //

module.exports = groupEntriesBy;
