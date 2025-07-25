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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var isComplexTypedArray = require( './../../../base/assert/is-complex-typed-array' );
var isBooleanArray = require( './../../../base/assert/is-booleanarray' );
var isAccessorArray = require( './../../../base/assert/is-accessor-array' );
var resolveGetter = require( './../../../base/resolve-getter' );
var isSameValue = require( '@stdlib/assert/is-same-value' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );


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
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
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

/**
* Counts the number of elements in a boolean array that are equal to a specified value.
*
* @private
* @param {Collection} x - input array
* @param {*} value - search value
* @returns {NonNegativeInteger} number of elements that are equal to a specified value
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new BooleanArray( [ true, false, true, false, true ] );
*
* var n = boolean( x, true );
* // returns 3
*/
function boolean( x, value ) {
	var view;
	var n;
	var v;
	var i;

	if ( !isBoolean( value ) ) {
		return 0;
	}
	view = reinterpretBoolean( x, 0 );

	v = ( value ) ? 1 : 0;
	n = 0;
	for ( i = 0; i < view.length; i++ ) {
		if ( view[ i ] === v ) {
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
	if ( isAccessorArray( x ) ) {
		if ( isComplexTypedArray( x ) ) {
			return complex( x, value );
		}
		if ( isBooleanArray( x ) ) {
			return boolean( x, value );
		}
		return accessors( x, value );
	}
	return indexed( x, value );
}


// EXPORTS //

module.exports = countSameValue;
