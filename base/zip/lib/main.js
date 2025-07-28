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
* Zips one or more arrays.
*
* ## Notes
*
* -   The function assumes that the list of arrays to be zipped all have the same length.
*
* @param {Collection<Collection>} arrays - list of arrays to be zipped
* @returns {Array<Array>} output array
*
* @example
* var x = [ 1, 2, 3 ];
* var y = [ 'a', 'b', 'c' ];
*
* var z = zip( [ x, y ] );
* // returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]
*/
function zip( arrays ) {
	var getters;
	var list;
	var out;
	var arr;
	var M;
	var N;
	var i;
	var j;

	M = arrays.length;
	if ( M < 1 ) {
		return [];
	}
	list = copy( arrays );
	N = list[ 0 ].length;
	if ( N < 1 ) {
		return [];
	}
	getters = [];
	for ( j = 0; j < M; j++ ) {
		getters.push( resolveGetter( list[ j ] ) );
	}
	out = [];
	for ( i = 0; i < N; i++ ) {
		arr = [];
		for ( j = 0; j < M; j++ ) {
			arr.push( getters[ j ]( list[ j ], i ) );
		}
		out.push( arr );
	}
	return out;
}


// EXPORTS //

module.exports = zip;
