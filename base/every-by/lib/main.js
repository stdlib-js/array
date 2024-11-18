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
* Tests whether an object has a specified method.
*
* @private
* @param {Object} obj - input object
* @param {string} method - method name
* @returns {boolean} boolean indicating whether an object has a specified method
*
* @example
* var bool = hasMethod( [], 'every' );
* // returns true
*
* @example
* var bool = hasMethod( [], 'beep' );
* // returns false
*/
function hasMethod( obj, method ) {
	return ( typeof obj[ method ] === 'function' );
}

/**
* Tests whether all elements in an array pass a test implemented by a predicate function.
*
* @private
* @param {Collection} x - input array
* @param {Function} predicate - test function
* @param {*} thisArg - execution context
* @returns {boolean} boolean indicating whether all elements pass a test
*
* @example
* function isPositive( v ) {
*     return v > 0;
* }
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = internal( x, isPositive );
* // returns true
*/
function internal( x, predicate, thisArg ) {
	var i;
	for ( i = 0; i < x.length; i++ ) {
		if ( !predicate.call( thisArg, x[ i ], i, x ) ) {
			return false;
		}
	}
	return true;
}

/**
* Tests whether all elements in an array pass a test implemented by a predicate function.
*
* @private
* @param {Object} x - input array object
* @param {Function} predicate - test function
* @param {*} thisArg - execution context
* @returns {boolean} boolean indicating whether all elements pass a test
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* function isPositive( v ) {
*     return v > 0;
* }
*
* var x = arraylike2object( toAccessorArray( [ 1, 2, 3, 4 ] ) );
*
* var out = accessors( x, isPositive );
* // returns true
*/
function accessors( x, predicate, thisArg ) {
	var data;
	var get;
	var i;

	data = x.data;
	get = x.accessors[ 0 ];

	for ( i = 0; i < data.length; i++ ) {
		if ( !predicate.call( thisArg, get( data, i ), i, data ) ) {
			return false;
		}
	}
	return true;
}


// MAIN //

/**
* Tests whether all elements in an array pass a test implemented by a predicate function.
*
* @param {Collection} x - input array
* @param {Function} predicate - test function
* @param {*} [thisArg] - execution context
* @returns {boolean} boolean indicating whether all elements pass a test
*
* @example
* function isPositive( v ) {
*     return v > 0;
* }
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = everyBy( x, isPositive );
* // returns true
*/
function everyBy( x, predicate, thisArg ) {
	var obj;
	if ( hasMethod( x, 'every' ) ) {
		return x.every( predicate, thisArg );
	}
	obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		return accessors( obj, predicate, thisArg );
	}
	return internal( x, predicate, thisArg );
}


// EXPORTS //

module.exports = everyBy;
