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

var isComplex128Array = require( './../../../../base/assert/is-complex128array' );
var isComplex64Array = require( './../../../../base/assert/is-complex64array' );
var isBooleanArray = require( './../../../../base/assert/is-booleanarray' );
var arraylike2object = require( './../../../../base/arraylike2object' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );
var isAlmostEqualF32 = require( '@stdlib/number/float32/base/assert/is-almost-equal' );
var isAlmostEqualF64 = require( '@stdlib/number/float64/base/assert/is-almost-equal' );
var isAlmostEqual = require( '@stdlib/assert/is-almost-equal' );


// FUNCTIONS //

/**
* Tests if two arrays have respective elements which are approximately equal within a specified number of ULPs (units in the last place).
*
* @private
* @param {Collection} x - first input array
* @param {Collection} y - second input array
* @param {NonNegativeInteger} maxULP - maximum allowed ULP difference
* @param {Function} fcn - function which tests approximate equality
* @returns {boolean} boolean indicating if both arrays have respective elements which are approximately equal
*
* @example
* var base = require( '@stdlib/number/float64/base/assert/is-almost-equal' );
*
* var x = [ 0, 0, 1, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = internal( x, y, 1, base );
* // returns true
*
* @example
* var base = require( '@stdlib/number/float64/base/assert/is-almost-equal' );
*
* var x = [ 0, 0, 0, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = internal( x, y, 1, base );
* // returns false
*/
function internal( x, y, maxULP, fcn ) {
	var i;
	for ( i = 0; i < x.length; i++ ) {
		if ( !fcn( x[ i ], y[ i ], maxULP ) ) {
			return false;
		}
	}
	return true;
}

/**
* Tests if two arrays have respective elements which are approximately equal within a specified number of ULPs (units in the last place).
*
* @private
* @param {Object} x - first input array object
* @param {Object} y - second input array object
* @param {NonNegativeInteger} maxULP - maximum allowed ULP difference
* @param {Function} fcn - function which tests approximate equality
* @returns {boolean} boolean indicating if both arrays have respective elements which are approximately equal
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var assert = require( '@stdlib/assert/is-almost-equal' );
*
* var x = arraylike2object( toAccessorArray( [ 0, 0, 1, 0 ] ) );
* var y = arraylike2object( toAccessorArray( [ 0, 0, 1, 0 ] ) );
*
* var out = accessors( x, y, 0, assert );
* // returns true
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var assert = require( '@stdlib/assert/is-almost-equal' );
*
* var x = arraylike2object( toAccessorArray( [ 0, 0, 0, 0 ] ) );
* var y = arraylike2object( toAccessorArray( [ 0, 0, 1, 0 ] ) );
*
* var out = accessors( x, y, 1, assert );
* // returns false
*/
function accessors( x, y, maxULP, fcn ) {
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
		if ( !fcn( xget( xdata, i ), yget( ydata, i ), maxULP ) ) {
			return false;
		}
	}
	return true;
}


// MAIN //

/**
* Tests if two arrays have respective elements which are approximately equal within a specified number of ULPs (units in the last place).
*
* @param {Collection} x - first input array
* @param {Collection} y - second input array
* @param {NonNegativeInteger} maxULP - maximum allowed ULP difference
* @returns {boolean} boolean indicating if both arrays have respective elements which are approximately equal
*
* @example
* var x = [ 0, 0, 1, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = hasAlmostEqualValues( x, y, 0 );
* // returns true
*
* @example
* var x = [ 0, 0, 0, 0 ];
* var y = [ 0, 0, 1, 0 ];
*
* var out = hasAlmostEqualValues( x, y, 1 );
* // returns false
*/
function hasAlmostEqualValues( x, y, maxULP ) {
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
				return internal( reinterpretBoolean( x, 0 ), reinterpretBoolean( y, 0 ), maxULP, isAlmostEqualF64 ); // eslint-disable-line max-len
			}
			return accessors( xo, yo, maxULP, isAlmostEqual ); // general accessors should always use general comparison
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
			// Determine whether we should use double-precision or single-precision comparison...
			if ( xr.BYTES_PER_ELEMENT === 8 || yr.BYTES_PER_ELEMENT === 8 ) {
				return internal( xr, yr, maxULP, isAlmostEqualF64 );
			}
			return internal( xr, yr, maxULP, isAlmostEqualF32 );
		}
		return accessors( xo, yo, maxULP, isAlmostEqual ); // general accessors should always use general comparison
	}
	// Determine whether we should use double-precision or single-precision comparison...
	if ( x.BYTES_PER_ELEMENT === 4 && y.BYTES_PER_ELEMENT === 4 ) {
		return internal( x, y, maxULP, isAlmostEqualF32 );
	}
	return internal( x, y, maxULP, isAlmostEqual ); // default to general comparison
}


// EXPORTS //

module.exports = hasAlmostEqualValues;
