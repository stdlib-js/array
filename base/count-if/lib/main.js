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

var isComplexTypedArray = require( './../../../base/assert/is-complex-typed-array' );
var isAccessorArray = require( './../../../base/assert/is-accessor-array' );
var resolveGetter = require( './../../../base/resolve-getter' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex' );


// FUNCTIONS //

/**
* Counts the number of elements in an indexed array that satisfy the provided testing function.
*
* @private
* @param {Collection} x - input array
* @param {Function} predicate - testing function
* @param {*} [thisArg] - function context
* @returns {NonNegativeInteger} number of values for which the provided function evaluates to true
*
* @example
* var x = [ 0, 1, 0, 1 ];
* function predicate( v ) {
*     return v > 0;
* }
* var n = indexed( x, predicate );
* // returns 2
*/
function indexed( x, predicate, thisArg ) {
	var n;
	var i;

	n = 0;
	for ( i = 0; i < x.length; i++ ) {
		if ( predicate.call( thisArg, x[ i ], i, x ) ) {
			n += 1;
		}
	}
	return n;
}

/**
* Counts the number of elements in an accessor array that satisfy the provided testing function.
*
* @private
* @param {Collection} x - input array
* @param {Function} predicate - testing function
* @param {*} [thisArg] - function context
* @returns {NonNegativeInteger} number of values for which the provided function evaluates to true
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 0, 1, 0, 1 ] );
* function predicate( v ) {
*	return v > 0;
* }
* var n = accessors( x, predicate );
* // returns 2
*/
function accessors( x, predicate, thisArg ) {
	var get;
	var n;
	var i;

	get = resolveGetter( x );

	n = 0;
	for ( i = 0; i < x.length; i++ ) {
		if ( predicate.call( thisArg, get( x, i ), i, x ) ) {
			n += 1;
		}
	}
	return n;
}

/**
* Counts the number of elements in a complex array that satisfy the provided testing function.
*
* @private
* @param {Collection} x - input array
* @param {Function} predicate - testing function
* @param {*} [thisArg] - function context
* @returns {NonNegativeInteger} number of values for which the provided function evaluates to true
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ] );
* function predicate( v ) {
*	return v > 0;
* }
* var n = complex( x, predicate );
* // returns 2
*/
function complex( x, predicate, thisArg ) {
	var view;
	var n;
	var i;

	view = reinterpret( x, 0 );

	n = 0;
	for ( i = 0; i < view.length; i += 2 ) {
		if ( predicate.call( thisArg, view[ i ], i, view ) || predicate.call( thisArg, view[ i+1 ], i+1, view ) ) {
			n += 1;
		}
	}
	return n;
}


// MAIN //

/**
* Counts the number of elements in an array that satisfy the provided testing function.
*
* @param {Collection} x - input array
* @param {Function} predicate - testing array
* @param {*} [thisArg] - function context
* @returns {NonNegativeInteger} number of truthy values
*
* @example
* var x = [ 0, 1, 0, 1, 1 ];
* function predicate( v ) {
*	return v > 0;
* }
* var n = countIf( x, predicate );
* // returns 3
*/
function countIf( x, predicate, thisArg ) {
	if ( isAccessorArray( x ) ) {
		if ( isComplexTypedArray( x ) ) {
			return complex( x, predicate, thisArg );
		}
		return accessors( x, predicate, thisArg );
	}
	return indexed( x, predicate, thisArg );
}


// EXPORTS //

module.exports = countIf;
