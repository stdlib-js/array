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
* Convert array entries to an array of objects.
*
* ## Notes
*
* -   The list of field names should be a two-element array where the first element corresponds to the field name of input array element index and the second element corresponds to the field name of the input array element value.
*
* @param {Collection} arr - input array
* @param {ArrayLikeObject<string>} fields - list of field names
* @returns {Array<Object>} output array
*
* @example
* var x = [ 1, 2, 3 ];
* var fields = [ 'x', 'y' ];
*
* var out = entries2objects( x, fields );
* // returns [ { 'x': 0, 'y': 1 }, { 'x': 1, 'y': 2 }, { 'x': 2, 'y': 3 } ]
*/
function entries2objects( arr, fields ) {
	var get;
	var out;
	var obj;
	var N;
	var i;
	var k;
	var v;

	N = arr.length;
	if ( N < 1 ) {
		return [];
	}
	get = resolveGetter( fields );
	k = get( fields, 0 );
	v = get( fields, 1 );

	get = resolveGetter( arr );
	out = [];
	for ( i = 0; i < N; i++ ) {
		obj = {};
		obj[ k ] = i;
		obj[ v ] = get( arr, i );
		out.push( obj );
	}
	return out;
}


// EXPORTS //

module.exports = entries2objects;
