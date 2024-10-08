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
* Cumulatively tests whether at least `n` array elements in a provided array are truthy.
*
* @private
* @param {Collection} x - input array
* @param {integer} n - number of elements
* @param {Collection} y - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var x = [ false, false, false, true, true ];
* var y =  [ false, null, false, null, false, null, false, null, false, null ];
*
* var out = indexed( x, 2, y, 2, 0 );
* // returns [ false, null, false, null, false, null, false, null, true, null ]
*/
function indexed( x, n, y, stride, offset ) {
	var flg;
	var io;
	var i;

	flg = false;
	io = offset;
	for ( i = 0; i < x.length; i++ ) {
		if ( !flg && x[ i ] ) {
			n -= 1;
			if ( n <= 0 ) {
				flg = true;
			}
		}
		y[ io ] = flg;
		io += stride;
	}
	return y;
}

/**
* Cumulatively tests whether at least `n` array elements in an accessor array are truthy.
*
* @private
* @param {Object} x - input array object
* @param {integer} n - number of elements
* @param {Object} y - output array object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ false, false, false, true, true ] );
* var y = toAccessorArray( [ false, null, false, null, false, null, false, null, true, null ] );
*
* var arr = accessors( arraylike2object( x ), 2, arraylike2object( y ), 2, 0 );
*
* var v = y.get( 0 );
* // returns false
*
* v = y.get( 2 );
* // returns false
*
* v = y.get( 4 );
* // returns false
*
* v = y.get( 6 );
* // returns false
*
* v = y.get( 8 );
* // returns true
*/
function accessors( x, n, y, stride, offset ) {
	var xdata;
	var ydata;
	var xget;
	var yset;
	var flg;
	var io;
	var i;

	xdata = x.data;
	ydata = y.data;

	xget = x.accessors[ 0 ];
	yset = y.accessors[ 1 ];

	flg = false;
	io = offset;
	for ( i = 0; i < xdata.length; i++ ) {
		if ( !flg && xget( xdata, i ) ) {
			n -= 1;
			if ( n <= 0 ) {
				flg = true;
			}
		}
		yset( ydata, io, flg );
		io += stride;
	}
	return ydata;
}

/**
* Cumulatively tests whether at least `n` array elements in a provided complex number array are truthy.
*
* @private
* @param {Collection} x - array containing interleaved real and imaginary components
* @param {integer} n - number of elements
* @param {Object} y - output array object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0 ] );
* var y = toAccessorArray( [ false, null, false, null, false, null, false, null, false, null ] );
*
* var arr = complex( x, 2, arraylike2object( y ), 2, 0 );
*
* var v = y.get( 0 );
* // returns false
*
* v = y.get( 2 );
* // returns false
*
* v = y.get( 4 );
* // returns false
*
* v = y.get( 6 );
* // returns false
*
* v = y.get( 8 );
* // returns false
*/
function complex( x, n, y, stride, offset ) {
	var ydata;
	var yset;
	var flg;
	var io;
	var i;

	yset = y.accessors[ 1 ];
	ydata = y.data;

	flg = false;
	io = offset;
	for ( i = 0; i < x.length; i += 2 ) {
		if ( !flg && ( x[ i ] || x[ i+1 ] ) ) {
			n -= 1;
			if ( n <= 0 ) {
				flg = true;
			}
		}
		yset( ydata, io, flg );
		io += stride;
	}
	return ydata;
}

/**
* Cumulatively tests whether at least `n` array elements in a provided array are truthy.
*
* @private
* @param {Collection} x - input array
* @param {integer} n - number of elements
* @param {Object} y - output array object
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = new Uint8Array( [ 0, 0, 0, 1, 0 ] );
* var y = toAccessorArray( [ false, null, false, null, false, null, false, null, false, null ] );
*
* var arr = boolean( x, 2, arraylike2object( y ), 2, 0 );
*
* var v = y.get( 0 );
* // returns false
*
* v = y.get( 2 );
* // returns false
*
* v = y.get( 4 );
* // returns false
*
* v = y.get( 6 );
* // returns false
*
* v = y.get( 8 );
* // returns false
*/
function boolean( x, n, y, stride, offset ) {
	var ydata;
	var yset;
	var flg;
	var io;
	var i;

	yset = y.accessors[ 1 ];
	ydata = y.data;

	flg = false;
	io = offset;
	for ( i = 0; i < x.length; i++ ) {
		if ( !flg && x[ i ] ) {
			n -= 1;
			if ( n <= 0 ) {
				flg = true;
			}
		}
		yset( ydata, io, flg );
		io += stride;
	}
	return ydata;
}


// MAIN //

/**
* Cumulatively tests whether at least `n` array elements in a provided array are truthy and assigns results to a provided output array.
*
* @param {Collection} x - input array
* @param {integer} n - number of elements
* @param {Collection} y - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array offset
* @returns {Collection} output array
*
* @example
* var x = [ false, false, false, true, true ];
* var y =  [ false, null, false, null, false, null, false, null, false, null ];
*
* var out = assign( x, 2, y, 2, 0 );
* // returns [ false, null, false, null, false, null, false, null, true, null ]
*
* var bool = ( y === out );
* // returns true
*/
function assign( x, n, y, stride, offset ) {
	var xo = arraylike2object( x );
	var yo = arraylike2object( y );
	if (
		xo.accessorProtocol ||
		yo.accessorProtocol
	) {
		// If provided a complex number array, reinterpret as a real typed array and test interleaved real and imaginary components, where we consider a complex number to be truthy if at least one component is non-zero...
		if ( isComplex128Array( x ) ) {
			return complex( reinterpret128( x, 0 ), n, yo, stride, offset );
		}
		if ( isComplex64Array( x ) ) {
			return complex( reinterpret64( x, 0 ), n, yo, stride, offset );
		}
		if ( isBooleanArray( x ) ) {
			return boolean( reinterpretBoolean( x, 0 ), n, yo, stride, offset );
		}
		return accessors( xo, n, yo, stride, offset );
	}
	indexed( x, n, y, stride, offset );
	return y;
}


// EXPORTS //

module.exports = assign;
