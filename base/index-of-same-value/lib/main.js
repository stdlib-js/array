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

var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var isComplexTypedArray = require( './../../../base/assert/is-complex-typed-array' );
var isBooleanArray = require( './../../../base/assert/is-booleanarray' );
var arraylike2object = require( './../../../base/arraylike2object' );
var isSameValue = require( '@stdlib/assert/is-same-value' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );


// FUNCTIONS //

/**
* Returns the index of the first element which equals a provided search element according to the same value algorithm.
*
* @private
* @param {Collection} x - input array
* @param {*} searchElement - search element
* @param {NonNegativeInteger} fromIndex - starting index (inclusive)
* @returns {integer} index
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var idx = indexed( x, 2, 0 );
* // returns 1
*/
function indexed( x, searchElement, fromIndex ) {
	var i;
	for ( i = fromIndex; i < x.length; i++ ) {
		if ( isSameValue( searchElement, x[ i ] ) ) {
			return i;
		}
	}
	return -1;
}

/**
* Returns the index of the first element which equals a provided search element according to the same value algorithm.
*
* @private
* @param {Object} x - input array object
* @param {*} searchElement - search element
* @param {NonNegativeInteger} fromIndex - starting index (inclusive)
* @returns {integer} index
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = arraylike2object( toAccessorArray( [ 1, 2, 3, 4 ] ) );
*
* var idx = accessors( x, 2, 0 );
* // returns 1
*/
function accessors( x, searchElement, fromIndex ) {
	var data;
	var get;
	var i;

	data = x.data;
	get = x.accessors[ 0 ];

	for ( i = fromIndex; i < data.length; i++ ) {
		if ( isSameValue( searchElement, get( data, i ) ) ) {
			return i;
		}
	}
	return -1;
}

/**
* Returns the index of the first element which equals a provided search element according to the same value algorithm.
*
* @private
* @param {Collection} x - input array
* @param {*} searchElement - search element
* @param {NonNegativeInteger} fromIndex - starting index (inclusive)
* @returns {integer} index
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ] );
*
* var idx = complex( x, new Complex128( 3.0, 4.0 ), 1 );
* // returns 2
*/
function complex( x, searchElement, fromIndex ) {
	var view;
	var re;
	var im;
	var i;
	if ( !isComplexLike( searchElement ) ) {
		return -1;
	}
	view = reinterpret( x, 0 );
	re = real( searchElement );
	im = imag( searchElement );
	for ( i = fromIndex*2; i < view.length; i += 2 ) {
		if ( isSameValue( view[ i ], re ) && isSameValue( view[ i+1 ], im ) ) {
			return i / 2;
		}
	}
	return -1;
}

/**
* Returns the index of the first element which equals a provided search element according to the same value algorithm.
*
* @private
* @param {Collection} x - input array
* @param {*} searchElement - search element
* @param {NonNegativeInteger} fromIndex - starting index (inclusive)
* @returns {integer} index
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new BooleanArray( [ true, false, true, false, true ] );
*
* var idx = boolean( x, true, 1 );
* // returns 2
*/
function boolean( x, searchElement, fromIndex ) {
	var view;
	var v;
	var i;
	if ( !isBoolean( searchElement ) ) {
		return -1;
	}
	view = reinterpretBoolean( x, 0 );
	v = ( searchElement ) ? 1 : 0;
	for ( i = fromIndex; i < view.length; i++ ) {
		if ( view[ i ] === v ) {
			return i;
		}
	}
	return -1;
}


// MAIN //

/**
* Returns the index of the first element which equals a provided search element according to the same value algorithm.
*
* ## Notes
*
* -   The function uses the [SameValue Algorithm][ecma-262-same-value-algorithm], as specified in ECMAScript 5.
* -   In contrast to the strict equality operator `===`, `-0` and `+0` are distinguishable and `NaNs` are the same.
* -   If unable to find an element which equals a provided search element, the function returns `-1`.
*
* [ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12
*
* @param {Collection} x - input array
* @param {*} searchElement - search element
* @param {integer} fromIndex - starting index (inclusive)
* @returns {integer} index
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var idx = indexOfSameValue( x, 2, 0 );
* // returns 1
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var idx = indexOfSameValue( x, 2, 0 );
* // returns 1
*/
function indexOfSameValue( x, searchElement, fromIndex ) {
	var obj;
	if ( fromIndex < 0 ) {
		fromIndex += x.length;
		if ( fromIndex < 0 ) {
			fromIndex = 0;
		}
	}
	obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		if ( isComplexTypedArray( x ) ) {
			return complex( x, searchElement, fromIndex );
		}
		if ( isBooleanArray( x ) ) {
			return boolean( x, searchElement, fromIndex );
		}
		return accessors( obj, searchElement, fromIndex );
	}
	return indexed( x, searchElement, fromIndex );
}


// EXPORTS //

module.exports = indexOfSameValue;
