/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Returns a new array by applying a mask to a provided input array and mapping the unmasked values according to a callback function.
*
* @param {Collection} x - input array
* @param {Collection} mask - mask array
* @param {Function} clbk - function to apply
* @param {*} [thisArg] - function context
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var y = mskrejectMap( x, mask, function( val ) {
*     return val * 2;
* } );
* // returns [ 2, 6 ]
*/
function mskrejectMap( x, mask, clbk, thisArg ) {
	var xget;
	var mget;
	var out;
	var i;

	// Resolve accessors for retrieving array elements:
	xget = resolveGetter( x );
	mget = resolveGetter( mask );

	// Extract each desired element from the provided array...
	out = [];
	for ( i = 0; i < x.length; i++ ) {
		if ( !mget( mask, i ) ) {
			out.push( clbk.call( thisArg, xget( x, i ), i, x ) ); // use `Array#push` to ensure "fast" elements
		}
	}
	return out;
}


// EXPORTS //

module.exports = mskrejectMap;
