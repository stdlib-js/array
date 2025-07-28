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
var copy = require( './../../../base/copy' );


// MAIN //

/**
* Converts each nested array to an object.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length.
* -   The number of provided array labels should equal the length of each nested array.
*
* @param {Collection<Collection>} arr - input array
* @param {ArrayLikeObject<string>} fields - list of field names
* @returns {Array<Object>} output array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
* var fields = [ 'x', 'y' ];
*
* var out = nested2objects( x, fields );
* // returns [ { 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 } ]
*/
function nested2objects( arr, fields ) {
	var names;
	var oget;
	var get;
	var out;
	var obj;
	var tmp;
	var M;
	var N;
	var i;
	var j;

	M = arr.length;
	if ( M < 1 ) {
		return [];
	}
	// Resolve the accessor for the outer array:
	oget = resolveGetter( arr );

	N = oget( arr, 0 ).length;
	if ( N < 1 ) {
		return [];
	}
	// Copy the list of fields to an indexed array to avoid repeated accessor calls:
	names = copy( fields );

	out = [];
	for ( i = 0; i < M; i++ ) {
		tmp = oget( arr, i );
		get = resolveGetter( tmp );
		obj = {};
		for ( j = 0; j < N; j++ ) {
			obj[ names[ j ] ] = get( tmp, j );
		}
		out.push( obj );
	}
	return out;
}


// EXPORTS //

module.exports = nested2objects;
