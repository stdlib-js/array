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

var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex' );
var isComplexTypedArray = require( './../../../base/assert/is-complex-typed-array' );
var isAccessorArray = require( './../../../base/assert/is-accessor-array' );
var resolveGetter = require( './../../../base/resolve-getter' );
var isSameValue = require( '@stdlib/assert/is-same-value' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );


// FUNCTIONS //

/**
* Counts the number of elements in an array that are equal to a specified value.
*
* @private
* @param {Collection} x - input array
* @param {*} value - search value
* @returns {NonNegativeInteger} number of elements that are equal to a specified value
*
* @example
* var x = [ 0, 1, 0, 1, 1 ];
*
* var n = indexed( x, 1 );
* // returns 3
*/
function indexed( x, value ) {
	var n;
	var i;

	n = 0;
	for ( i = 0; i < x.length; i++ ) {
		if ( isSameValue( x[ i ], value ) ) {
			n += 1;
		}
	}
	return n;
}

/**
* Counts the number of elements in an accessor array that are equal to a specified value.
*
* @private
* @param {Collection} x - input array
* @param {*} value - search value
* @returns {NonNegativeInteger} number of elements that are equal to a provided value
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 0, 1, 0, 1, 1 ] );
*
* var n = accessors( x, 1 );
* // returns 3
*/
function accessors( x, value ) {
	var get;
	var n;
	var i;

	get = resolveGetter( x );

	n = 0;
	for ( i = 0; i < x.length; i++ ) {
		if ( isSameValue( get( x, i ), value ) ) {
			n += 1;
		}
	}
	return n;
}

/**
* Counts the number of elements in a complex array that are equal to a specified value.
*
* @private
* @param {Collection} x - input array
* @param {*} value - search value
* @returns {NonNegativeInteger} number of elements that are equal to a specified value
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ] );
*
* var n = complex( x, new Complex128( 1.0, 2.0 ) );
* // returns 1
*/
function complex( x, value ) {
	var view;
	var re;
	var im;
	var n;
	var i;

	if ( !isComplexLike( value ) ) {
		return 0;
	}
	re = real( value );
	im = imag( value );

	view = reinterpret( x, 0 );

	n = 0;
	for ( i = 0; i < view.length; i += 2 ) {
		if ( isSameValue( view[ i ], re ) && isSameValue( view[ i+1 ], im ) ) {
			n += 1;
		}
	}
	return n;
}


// MAIN //

/**
* Counts the number of elements in an array that are equal to a specified value.
*
* ## Notes
*
* -   The function uses the [SameValue Algorithm][ecma-262-same-value-algorithm], as specified in ECMAScript 5.
* -   In contrast to the strict equality operator `===`, `-0` and `+0` are distinguishable and `NaNs` are the same.
*
* [ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12
*
* @param {Collection} x - input array
* @param {*} value - search value
* @returns {NonNegativeInteger} number of elements that are equal to a specified value
*
* @example
* var x = [ 0, 1, 0, 1, 1 ];
*
* var n = countSameValue( x, 1 );
* // returns 3
*/
function countSameValue( x, value ) {
	if ( isAccessorArray( x, value ) ) {
		if ( isComplexTypedArray( x, value ) ) {
			return complex( x, value );
		}
		return accessors( x, value );
	}
	return indexed( x, value );
}


// EXPORTS //

module.exports = countSameValue;
