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

var isArray = require( '@stdlib/assert/is-array' );
var resolveGetter = require( './../../../base/resolve-getter' );


// MAIN //

/**
* Groups the elements of an array according to a specified property name.
*
* @param {Collection} x - input array
* @param {(string|symbol|number)} key - property name whose values are used to determine groups
* @returns {Object} group results
*
* @example
* var x = [
*     {
*         'x': 1,
*         'y': 2
*     },
*     {
*         'x': 1,
*         'y': 3
*     }
* ];
*
* var out = groupValuesOnKey( x, 'y' );
* // returns { '2': [ { 'x': 1, 'y': 2 } ], '3': [ { 'x': 1, 'y': 3 } ] }
*/
function groupValuesOnKey( x, key ) {
	var get;
	var out;
	var o;
	var v;
	var i;
	var k;

	// Resolve an accessor for retrieving array elements:
	get = resolveGetter( x );

	// Loop over the elements and assign each to a group...
	out = {};
	for ( i = 0; i < x.length; i++ ) {
		v = get( x, i );
		k = v[ key ];
		o = out[ k ];
		if ( isArray( o ) ) {
			o.push( v );
		} else {
			out[ k ] = [ v ];
		}
	}
	return out;
}


// EXPORTS //

module.exports = groupValuesOnKey;
