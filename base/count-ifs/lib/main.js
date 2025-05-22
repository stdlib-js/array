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

var arraylike2object = require( './../../../base/arraylike2object' );
var zeroTo = require( './../../../base/zero-to' );


// FUNCTIONS //

/**
* Returns an array of indices corresponding to the elements of an input array which pass a test implemented by a predicate function.
*
* @private
* @param {Collection} x - input array
* @param {Array<number>} idx - list of indices
* @param {Function} predicate - predicate function
* @returns {Array<number>} updated list of indices
*
* @example
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var zeroTo = require( '@stdlib/array/base/zero-to' );
*
* function predicate( v ) {
*     return ( v > 0 );
* }
*
* var x = arraylike2object( toAccessorArray( [ -1, 2, 3, -4, 5 ] ) );
* var idx = zeroTo( 5 );
*
* var out = accessors( x, idx, predicate );
* // returns [ 1, 2, 4 ]
*/
function accessors( x, idx, predicate ) {
	var buf;
	var get;
	var i;
	var j;
	var k;

	buf = x.data;
	get = x.accessors[ 0 ];

	k = 0;
	for ( i = 0; i < idx.length; i++ ) {
		j = idx[ i ];
		if ( predicate( get( buf, j ), j, buf ) ) {
			idx[ k ] = j;
			k += 1;
		}
	}
	idx.length = k;
	return idx;
}

/**
* Returns an array of indices corresponding to the elements of an input array which pass a test implemented by a predicate function.
*
* @private
* @param {Collection} x - input array
* @param {Array<number>} idx - list of indices
* @param {Function} predicate - predicate function
* @returns {Array<number>} updated list of indices
*
* @example
* var zeroTo = require( '@stdlib/array/base/zero-to' );
*
* function predicate( v ) {
*     return ( v > 0 );
* }
*
* var x = [ -1, 2, 3, -4, 5 ];
* var idx = zeroTo( 5 );
*
* var out = indexed( x, idx, predicate );
* // returns [ 1, 2, 4 ]
*/
function indexed( x, idx, predicate ) {
	var i;
	var j;
	var k;

	k = 0;
	for ( i = 0; i < idx.length; i++ ) {
		j = idx[ i ];
		if ( predicate( x[ j ], j, x ) ) {
			idx[ k ] = j;
			k += 1;
		}
	}
	idx.length = k;
	return idx;
}


// MAIN //

/**
* Performs element-wise evaluation of one or more input arrays according to provided predicate functions and counts the number of elements for which all predicates respectively return `true`.
*
* @param {Collection} x0 - first input array
* @param {Function} predicate0 - first predicate function
* @param {Collection} [x1] - second input array
* @param {Function} [predicate1] - second predicate function
* @param {Collection} [x2] - third input array
* @param {Function} [predicate2] - third predicate function
* @param {...(Collection|Function)} [args] - additional input arrays and predicate functions
* @returns {NonNegativeInteger} result
*
* @example
* function predicate0( value ) {
*     return ( value > 0 );
* }
*
* function predicate1( value ) {
*     return ( value < 3 );
* }
*
* var x0 = [ 0, 1, 0, 1, 2 ];
* var x1 = [ 2, 3, 1, 2, 5 ];
*
* var n = countIfs( x0, predicate0, x1, predicate1 );
* // returns 1
*/
function countIfs() {
	var predicates;
	var arrays;
	var len;
	var idx;
	var x;
	var i;

	arrays = [];
	predicates = [];
	for ( i = 0; i < arguments.length; i += 2 ) {
		arrays.push( arraylike2object( arguments[ i ] ) );
		predicates.push( arguments[ i+1 ] );
	}

	len = arguments[ 0 ].length;
	idx = zeroTo( len );
	for ( i = 0; i < arrays.length; i++ ) {
		x = arrays[ i ];
		if ( x.accessorProtocol ) {
			idx = accessors( x, idx, predicates[ i ] );
		} else {
			idx = indexed( x.data, idx, predicates[ i ] );
		}
	}
	return idx.length;
}


// EXPORTS //

module.exports = countIfs;
