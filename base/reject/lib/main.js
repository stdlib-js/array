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

var arraylike2object = require( './../../../base/arraylike2object' );


// FUNCTIONS //

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @private
* @param {Collection} x - input array
* @param {Function} predicate - test function
* @param {*} thisArg - execution context
* @returns {Array} output array
*
* @example
* function isPositive( v ) {
*     return v > 0;
* }
*
* var x = [ 1, -2, -3, 4 ];
*
* var out = internal( x, isPositive );
* // returns [ -2, -3 ]
*/
function internal( x, predicate, thisArg ) {
	var out;
	var v;
	var i;

	out = [];
	for ( i = 0; i < x.length; i++ ) {
		v = x[ i ];
		if ( !predicate.call( thisArg, v, i, x ) ) {
			out.push( v );
		}
	}
	return out;
}

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @private
* @param {Object} x - input array object
* @param {Function} predicate - test function
* @param {*} thisArg - execution context
* @returns {Array} output array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* function isPositive( v ) {
*     return v > 0;
* }
*
* var x = arraylike2object( toAccessorArray( [ 1, -2, -3, 4 ] ) );
*
* var out = accessors( x, isPositive );
* // returns [ -2, -3 ]
*/
function accessors( x, predicate, thisArg ) {
	var data;
	var get;
	var out;
	var v;
	var i;

	data = x.data;
	get = x.accessors[ 0 ];

	out = [];
	for ( i = 0; i < data.length; i++ ) {
		v = get( data, i );
		if ( !predicate.call( thisArg, v, i, data ) ) {
			out.push( v );
		}
	}
	return out;
}


// MAIN //

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param {Collection} x - input array
* @param {Function} predicate - test function
* @param {*} [thisArg] - execution context
* @returns {Collection} output array
*
* @example
* function isPositive( v ) {
*     return v > 0;
* }
*
* var x = [ 1, -2, -3, 4 ];
*
* var out = reject( x, isPositive );
* // returns [ -2, -3 ]
*/
function reject( x, predicate, thisArg ) {
	var obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		return accessors( obj, predicate, thisArg );
	}
	return internal( x, predicate, thisArg );
}


// EXPORTS //

module.exports = reject;
