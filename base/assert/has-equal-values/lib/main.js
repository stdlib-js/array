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

var isComplex128Array = require( './../../../../base/assert/is-complex128array' );
var isComplex64Array = require( './../../../../base/assert/is-complex64array' );
var isBooleanArray = require( './../../../../base/assert/is-booleanarray' );
var arraylike2object = require( './../../../../base/arraylike2object' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );


// FUNCTIONS //

/**
* Tests if two arrays have equal values.
*
* @private
* @param {Collection} x - first input array
* @param {Collection} y - second input array
* @returns {boolean} boolean indicating if both arrays have equal values
*
* @example
* var x = [ 0, 0, 1, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = internal( x, y );
* // returns true
*
* @example
* var x = [ 0, 0, 0, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = internal( x, y );
* // returns false
*/
function internal( x, y ) {
	var i;
	for ( i = 0; i < x.length; i++ ) {
		if ( x[ i ] !== y[ i ] ) {
			return false;
		}
	}
	return true;
}

/**
* Tests if two arrays have equal values.
*
* @private
* @param {Object} x - first input array object
* @param {Object} y - second input array object
* @returns {boolean} boolean indicating if both arrays have equal values
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = arraylike2object( toAccessorArray( [ 0, 0, 1, 0 ] ) );
* var y = arraylike2object( toAccessorArray( [ 0, 0, 1, 0 ] ) );
*
* var out = accessors( x, y );
* // returns true
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = arraylike2object( toAccessorArray( [ 0, 0, 0, 0 ] ) );
* var y = arraylike2object( toAccessorArray( [ 0, 0, 1, 0 ] ) );
*
* var out = accessors( x, y );
* // returns false
*/
function accessors( x, y ) {
	var xdata;
	var ydata;
	var xget;
	var yget;
	var i;

	xdata = x.data;
	ydata = y.data;

	xget = x.accessors[ 0 ];
	yget = y.accessors[ 0 ];

	for ( i = 0; i < xdata.length; i++ ) {
		if ( xget( xdata, i ) !== yget( ydata, i ) ) {
			return false;
		}
	}
	return true;
}


// MAIN //

/**
* Tests if two arrays have equal values.
*
* @param {Collection} x - first input array
* @param {Collection} y - second input array
* @returns {boolean} boolean indicating if both arrays have equal values
*
* @example
* var x = [ 0, 0, 1, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = hasEqualValues( x, y );
* // returns true
*
* @example
* var x = [ 0, 0, 0, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = hasEqualValues( x, y );
* // returns false
*/
function hasEqualValues( x, y ) {
	var FLG;
	var xo;
	var yo;
	var xr;
	var yr;

	if ( x.length !== y.length ) {
		return false;
	}
	xo = arraylike2object( x );
	yo = arraylike2object( y );
	if ( xo.accessorProtocol || yo.accessorProtocol ) {
		FLG = 2;

		// If provided boolean arrays, reinterpret the arrays to avoid using accessors to access array elements...
		if ( isBooleanArray( x ) ) {
			if ( isBooleanArray( y ) ) {
				return internal( reinterpretBoolean( x, 0 ), reinterpretBoolean( y, 0 ) ); // eslint-disable-line max-len
			}
			return accessors( xo, yo );
		}
		// If provided a complex number array, reinterpret as a real typed array and test interleaved real and imaginary components...
		if ( isComplex128Array( x ) ) {
			xr = reinterpret128( x, 0 );
			FLG -= 1;
		} else if ( isComplex64Array( x ) ) {
			xr = reinterpret64( x, 0 );
			FLG -= 1;
		}
		if ( isComplex128Array( y ) ) {
			yr = reinterpret128( y, 0 );
			FLG -= 1;
		} else if ( isComplex64Array( y ) ) {
			yr = reinterpret64( y, 0 );
			FLG -= 1;
		}
		if ( FLG === 0 ) {
			return internal( xr, yr );
		}
		return accessors( xo, yo );
	}
	return internal( x, y );
}


// EXPORTS //

module.exports = hasEqualValues;
