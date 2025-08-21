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

var objectKeys = require( '@stdlib/utils/keys' );
var resolveGetter = require( './../../../base/resolve-getter' );


// MAIN //

/**
* Copies and renames specified keys for every element in a provided array.
*
* ## Notes
*
* -   The function only copies and renames those keys which are present in a provided mapping object. Any keys which are not present in the provided mapping object, but are present in the original objects, are omitted during object creation.
* -   The function assumes that each object has the keys specified in a provided mapping object.
* -   The function performs shallow copies of key values.
*
* @param {ArrayLikeObject<Object>} arr - input array
* @param {Object} mapping - object mapping existing keys to new key names
* @returns {Array<Object>} output array
*
* @example
* var x = [
*     {
*         'x': 1,
*         'y': 2
*     },
*     {
*         'x': 3,
*         'y': 4
*     }
* ];
* var mapping = {
*     'x': 'a',
*     'y': 'b'
* };
*
* var out = rekey( x, mapping );
* // returns [ { 'a': 1, 'b': 2 }, { 'a': 3, 'b': 4 } ]
*/
function rekey( arr, mapping ) {
	var okeys;
	var nkeys;
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
	// Resolve the list of old key names:
	okeys = objectKeys( mapping );
	N = okeys.length;

	// Resolve the list of new key names:
	nkeys = [];
	for ( i = 0; i < N; i++ ) {
		nkeys.push( mapping[ okeys[ i ] ] );
	}

	get = resolveGetter( arr );
	out = [];
	for ( i = 0; i < M; i++ ) {
		tmp = get( arr, i );
		obj = {};
		for ( j = 0; j < N; j++ ) {
			obj[ nkeys[ j ] ] = tmp[ okeys[ j ] ];
		}
		out.push( obj );
	}
	return out;
}


// EXPORTS //

module.exports = rekey;
