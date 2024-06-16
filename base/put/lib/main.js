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
var resolveSetter = require( './../../../base/resolve-setter' );
var ind = require( '@stdlib/ndarray/base/ind' ).factory;
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Replaces specified elements of an array with provided values.
*
* @param {Collection} x - input array
* @param {IntegerArray} indices - list of indices
* @param {Collection} values - values to set
* @param {string} mode - index mode
* @throws {Error} third argument must be broadcast compatible with the second argument
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var indices = [ 1, 2 ];
* var values = [ 20, 30 ];
*
* var out = put( x, indices, values, 'throw' );
* // returns [ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var indices = [ 1, 2 ];
* var values = [ 20, 30 ];
*
* var out = put( x, indices, [ 30 ], 'throw' );
* // returns [ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
function put( x, indices, values, mode ) {
	var getIndex;
	var xset;
	var iget;
	var vget;
	var max;
	var vs;
	var vo;
	var N;
	var i;
	var j;

	// Resolve accessors for accessing array elements:
	xset = resolveSetter( x );
	iget = resolveGetter( indices );
	vget = resolveGetter( values );

	// Resolve a function for returning an index according to the specified index mode:
	getIndex = ind( mode );

	// Resolve the maximum index:
	max = x.length - 1;

	// Broadcast the `values` array...
	N = indices.length;
	if ( N > 0 ) { // note: this allows `indices` to be empty and `values` to be non-empty (and not broadcast compatible with `indices`) to allow the potential use case where having an empty `indices` array is expected behavior and you don't want to trigger an exception simply because `values` has elements
		// Note that this effectively in-lines logic from `@stdlib/array/base/broadcast-array` in order to avoid unnecessary object creation...
		if ( values.length === N ) {
			vs = 1;
		} else if ( values.length === 1 ) {
			vs = 0;
		} else {
			throw new Error( format( 'invalid argument. The third argument must be broadcast compatible with the second argument. Array shape: (%d). Desired shape: (%d).', values.length, N ) );
		}
	}
	vo = 0;

	// Replace each desired element in the provided array...
	for ( i = 0; i < N; i++ ) {
		j = getIndex( iget( indices, i ), max );
		xset( x, j, vget( values, vo ) );
		vo += vs;
	}
	return x;
}


// EXPORTS //

module.exports = put;
