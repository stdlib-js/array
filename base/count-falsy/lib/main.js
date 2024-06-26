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
var isBooleanArray = require( './../../../base/assert/is-booleanarray' );
var isAccessorArray = require( './../../../base/assert/is-accessor-array' );
var resolveGetter = require( './../../../base/resolve-getter' );
var reinterpretComplex = require( '@stdlib/strided/base/reinterpret-complex' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );


// FUNCTIONS //

/**
* Counts the number of falsy values in an indexed array.
*
* @private
* @param {Collection} x - input array
* @returns {NonNegativeInteger} number of falsy values
*
* @example
* var x = [ 0, 1, 0, 1, 1 ];
*
* var n = indexed( x );
* // returns 2
*/
function indexed( x ) {
	var n;
	var i;

	n = 0;
	for ( i = 0; i < x.length; i++ ) {
		if ( !x[ i ] ) {
			n += 1;
		}
	}
	return n;
}

/**
* Counts the number of falsy values in an accessor array.
*
* @private
* @param {Collection} x - input array
* @returns {NonNegativeInteger} number of falsy values
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 0, 1, 0, 1, 1 ] );
*
* var n = accessors( x );
* // returns 2
*/
function accessors( x ) {
	var get;
	var n;
	var i;

	get = resolveGetter( x );

	n = 0;
	for ( i = 0; i < x.length; i++ ) {
		if ( !get( x, i ) ) {
			n += 1;
		}
	}
	return n;
}

/**
* Counts the number of falsy values in a complex array.
*
* @private
* @param {Collection} x - input array
* @returns {NonNegativeInteger} number of falsy values
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0, 5.0, 6.0 ] );
*
* var n = complex( x );
* // returns 2
*/
function complex( x ) {
	var view;
	var n;
	var i;

	view = reinterpretComplex( x, 0 );

	n = 0;
	for ( i = 0; i < view.length; i += 2 ) {
		if ( view[ i ] === 0.0 && view[ i+1 ] === 0.0 ) {
			n += 1;
		}
	}
	return n;
}


// MAIN //

/**
* Counts the number of falsy values in an array.
*
* @param {Collection} x - input array
* @returns {NonNegativeInteger} number of falsy values
*
* @example
* var x = [ 0, 1, 0, 1, 1 ];
*
* var n = countFalsy( x );
* // returns 2
*/
function countFalsy( x ) {
	if ( isAccessorArray( x ) ) {
		if ( isBooleanArray( x ) ) {
			return indexed( reinterpretBoolean( x, 0 ) );
		}
		if ( isComplexTypedArray( x ) ) {
			return complex( x );
		}
		return accessors( x );
	}
	return indexed( x );
}


// EXPORTS //

module.exports = countFalsy;
