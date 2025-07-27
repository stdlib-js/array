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
* Zips one or more arrays to an array of objects.
*
* ## Notes
*
* -   The function assumes that the list of arrays to be zipped all have the same length.
* -   The list of provided array labels should equal the number of arrays to be zipped.
*
* @param {Collection<Collection>} arrays - list of arrays to be zipped
* @param {ArrayLikeObject<string>} labels - list of array labels
* @returns {Array<Object>} output array
*
* @example
* var x = [ 1, 2, 3 ];
* var y = [ 'a', 'b', 'c' ];
*
* var labels = [ 'x', 'y' ];
*
* var z = zip2objects( [ x, y ], labels );
* // returns [ { 'x': 1, 'y': 'a' }, { 'x': 2, 'y': 'b' }, { 'x': 3, 'y': 'c' } ]
*/
function zip2objects( arrays, labels ) {
	var getters;
	var keys;
	var get;
	var out;
	var obj;
	var M;
	var N;
	var i;
	var j;

	M = arrays.length;
	if ( M < 1 ) {
		return [];
	}
	N = arrays[ 0 ].length;
	if ( N < 1 ) {
		return [];
	}
	getters = [];

	get = resolveGetter( labels );
	keys = [];
	for ( j = 0; j < M; j++ ) {
		getters.push( resolveGetter( arrays[ j ] ) );
		keys.push( get( labels, j ) );
	}
	out = [];
	for ( i = 0; i < N; i++ ) {
		obj = {};
		for ( j = 0; j < M; j++ ) {
			obj[ keys[ j ] ] = getters[ j ]( arrays[ j ], i );
		}
		out.push( obj );
	}
	return out;
}


// EXPORTS //

module.exports = zip2objects;
