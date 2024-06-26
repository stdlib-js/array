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

var isComplex128Array = require( './../../../base/assert/is-complex128array' );
var isComplex64Array = require( './../../../base/assert/is-complex64array' );
var isBooleanArray = require( './../../../base/assert/is-booleanarray' );
var arraylike2object = require( './../../../base/arraylike2object' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );


// FUNCTIONS //

/**
* Tests whether all elements in an array are truthy.
*
* @private
* @param {Collection} x - input array
* @returns {boolean} boolean indicating whether all elements are truthy
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = internal( x );
* // returns true
*
* @example
* var x = [ 1, 2, 0, 4 ];
*
* var out = internal( x );
* // returns false
*/
function internal( x ) {
	var i;
	for ( i = 0; i < x.length; i++ ) {
		if ( !x[ i ] ) {
			return false;
		}
	}
	return true;
}

/**
* Tests whether all elements in a complex number array are truthy.
*
* @private
* @param {Collection} x - underlying data buffer
* @returns {boolean} boolean indicating whether all elements are truthy
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = internalComplex( x );
* // returns true
*
* @example
* var x = [ 1, 2, 0, 4 ];
*
* var out = internalComplex( x );
* // returns true
*
* @example
* var x = [ 1, 2, 0, 0 ];
*
* var out = internalComplex( x );
* // returns false
*/
function internalComplex( x ) {
	var i;
	for ( i = 0; i < x.length; i += 2 ) {
		if ( !( x[ i ] || x[ i+1 ] ) ) {
			return false;
		}
	}
	return true;
}

/**
* Tests whether all elements in an array are truthy.
*
* @private
* @param {Object} x - input array object
* @returns {boolean} boolean indicating whether all elements are truthy
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = arraylike2object( toAccessorArray( [ 1, 2, 3, 4 ] ) );
*
* var out = accessors( x );
* // returns true
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = arraylike2object( toAccessorArray( [ 1, 2, 0, 4 ] ) );
*
* var out = accessors( x );
* // returns false
*/
function accessors( x ) {
	var data;
	var get;
	var i;

	data = x.data;
	get = x.accessors[ 0 ];

	for ( i = 0; i < data.length; i++ ) {
		if ( !get( data, i ) ) {
			return false;
		}
	}
	return true;
}


// MAIN //

/**
* Tests whether all elements in an array are truthy.
*
* @param {Collection} x - input array
* @returns {boolean} boolean indicating whether all elements are truthy
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = every( x );
* // returns true
*
* @example
* var x = [ 1, 2, 0, 4 ];
*
* var out = every( x );
* // returns false
*/
function every( x ) {
	var obj = arraylike2object( x );
	if ( obj.accessorProtocol ) {
		// If provided a complex number array, reinterpret as a real typed array and test interleaved real and imaginary components, where we consider a complex number to be truthy if at least one component is non-zero...
		if ( isComplex128Array( x ) ) {
			return internalComplex( reinterpret128( x, 0 ) );
		}
		if ( isComplex64Array( x ) ) {
			return internalComplex( reinterpret64( x, 0 ) );
		}
		// If provided a boolean array, reinterpret as a typed array and test each element...
		if ( isBooleanArray( x ) ) {
			return internal( reinterpretBoolean( x, 0 ) );
		}
		return accessors( obj );
	}
	return internal( x );
}


// EXPORTS //

module.exports = every;
